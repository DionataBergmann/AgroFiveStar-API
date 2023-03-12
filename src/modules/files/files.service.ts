import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { existsSync, mkdirSync, unlinkSync } from 'fs';
import { FileUpload } from 'graphql-upload';
import * as sharp from 'sharp';

import { Repository } from 'typeorm';
import * as fs from 'fs';
import { File } from './entities/files.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private fileRepository: Repository<File>,
  ) {}

  PUBLIC_UPLOAD_DIR = './uploads/public';
  PRIVATE_UPLOAD_DIR = './uploads/private';
  MAX_WIDTH = 400;
  PUBLIC_MAP_MARKER_FILE = `uploads/map/marker.png`;

  async getFilePathById(id: string): Promise<string> {
    const file = await this.fileRepository.findOne(id);
    const repo = file.isPrivate
      ? this.PRIVATE_UPLOAD_DIR
      : this.PUBLIC_UPLOAD_DIR;

    return `${repo}/${file.fileName}`;
  }

  private async createDirectoryIfItDoesntExists(repo) {
    if (!existsSync(repo)) {
      mkdirSync(repo, { recursive: true });
    }
  }

  private async createPhysicalFile(
    id,
    fileUpload: FileUpload,
    isImage: boolean,
    isPrivate?: boolean,
    formatImage = true,
  ): Promise<sharp.OutputInfo> {
    if (isImage)
      return this.createPhysicalImage(id, fileUpload, isPrivate, formatImage);

    const fileStream = fileUpload.createReadStream();

    const extension = fileUpload.filename.substr(
      fileUpload.filename.lastIndexOf('.') + 1,
    );

    const repo = isPrivate ? this.PRIVATE_UPLOAD_DIR : this.PUBLIC_UPLOAD_DIR;

    this.createDirectoryIfItDoesntExists(repo);

    fileStream.pipe(fs.createWriteStream(`${repo}/${id}.${extension}`));

    let byteLength = 0;
    for await (const uploadChunk of fileStream) {
      byteLength += (uploadChunk as Buffer).byteLength;
    }

    return {
      format: extension,
      size: byteLength.toString(),
    };
  }

  async createPhysicalImage(
    id: string,
    fileUpload: FileUpload,
    isPrivate?: boolean,
    formatImage = true,
  ): Promise<sharp.OutputInfo> {
    const buffer = await this.readStreamToBuffer(fileUpload);
    const file = sharp(buffer);
    const metadata = await file.metadata();

    if (formatImage) {
      file.rotate();
      file.flatten({
        background: {
          r: 255,
          g: 255,
          b: 255,
          alpha: 1,
        },
      });
      file.resize(this.MAX_WIDTH, this.MAX_WIDTH, {
        fit: 'contain',
        background: {
          r: 255,
          g: 255,
          b: 255,
          alpha: 1,
        },
      });
    }

    const repo = isPrivate ? this.PRIVATE_UPLOAD_DIR : this.PUBLIC_UPLOAD_DIR;

    this.createDirectoryIfItDoesntExists(repo);

    const filePath = `${repo}/${id}.${metadata.format}`;

    const writtedFile = await file.toFile(filePath);

    return writtedFile;
  }

  private readStreamToBuffer(fileUpload: FileUpload) {
    return new Promise(async (resolve) => {
      const buffers = [];
      fileUpload
        .createReadStream()
        .on('data', (data) => {
          buffers.push(data);
        })
        .on('end', () => {
          resolve(Buffer.concat(buffers));
        });
    });
  }

  async uploadFile(
    fileUpload: FileUpload,
    isImage?: boolean,
    isPrivate?: boolean,
    formatImage = true,
  ): Promise<File> {
    const file: File = new File();

    file.fileName = fileUpload.filename;
    file.originalFileName = fileUpload.filename;
    const created: File = await this.fileRepository.save(file);

    const { id } = created;

    const { format, size } = await this.createPhysicalFile(
      id,
      fileUpload,
      isImage,
      isPrivate,
      formatImage,
    );
    created.fileName = `${id}.${format}`;
    created.fileSize = size.toString();
    created.fileFormat = format;
    created.originalFileName = fileUpload.filename;
    created.isPrivate = isPrivate;

    const savedFile = this.fileRepository.save(created);

    return savedFile;
  }

  async isFilePrivateById(id: string): Promise<boolean> {
    const file = await this.fileRepository.findOne(id);
    return file.isPrivate;
  }

  async deleteFile(id: string): Promise<boolean> {
    const res = await this.fileRepository.findOne(id);

    const { fileName } = res;

    const repo = res.isPrivate
      ? this.PRIVATE_UPLOAD_DIR
      : this.PUBLIC_UPLOAD_DIR;

    unlinkSync(`${repo}/${fileName}`);

    await this.fileRepository.delete(id);

    return true;
  }
}
