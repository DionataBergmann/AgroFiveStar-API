import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilesService } from '../files/files.service';
import { CreateFieldInput } from './dto/create-field.input';
import { Field } from './entities/field.entity';
import { FileUpload } from 'graphql-upload';
import { UpdateFieldInput } from './dto/update-field.input';
import { File } from '../files/entities/files.entity';

@Injectable()
export class FieldsService extends TypeOrmQueryService<Field> {
  constructor(
    @InjectRepository(Field)
    public fieldRepository: Repository<Field>,

    public filesService: FilesService,
  ) {
    super(fieldRepository, { useSoftDelete: true });
  }

  async createField(
    data: CreateFieldInput,
    fieldImage?: FileUpload,
  ): Promise<Field> {
    const field = this.fieldRepository.create({
      ...data,
    });
    const fieldSaved = await this.fieldRepository.save(field);

    if (field && fieldImage) {
      const cardFile = await this.filesService.uploadFile(
        fieldImage,
        true,
        false,
      );
      field.fieldImage = cardFile;
      await this.fieldRepository.save(field);
    }
    return fieldSaved;
  }
  async updateField(
    id: string,
    data?: UpdateFieldInput,
    image?: FileUpload,
  ): Promise<Field> {
    const foundField: Field = await this.fieldRepository.findOne(id);
    if (!foundField) {
      throw new NotFoundException('Erro ao encontrar campo');
    }

    if (image) {
      if (foundField.fieldImage) {
        await this.filesService.deleteFile(foundField.fieldImage.id);
      }
      const imageFile: File = await this.filesService.uploadFile(
        image,
        true,
        false,
      );
      foundField.fieldImage = imageFile;
    }

    const buildField: Field = this.fieldRepository.create(data);

    const saved = await this.fieldRepository.save({
      ...foundField,
      ...buildField,
    });
    return saved;
  }

  async deleteAndForget(id: string): Promise<Field> {
    const field: Field = await this.fieldRepository.findOne(id, {
      relations: ['fieldImage'],
    });
    await this.deleteOne(field?.id);
    await this.filesService.deleteFile(field?.fieldImage?.id);
    return field;
  }
}
