import { Controller, Get, Param, Req, Res } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { FilesService } from '../files.service';

@Controller('file')
export class FileController {
  constructor(private fileService: FilesService) {}

  @Get('/:id')
  async serveFiles(
    @Param('id') id: string,
    @Res() res: Response,
    @Req() req: Request,
  ): Promise<any> {
    if (await this.fileService.isFilePrivateById(id)) {
      const jwtService = new JwtService({
        secret: process.env.JWT_SECRET,
      });
      try {
        const token = req.query.token.toString();
        jwtService.verify(token);
      } catch (error) {
        return res.status(401).end();
      }
    }

    res.sendFile(await this.fileService.getFilePathById(id), { root: './' });
  }
}
