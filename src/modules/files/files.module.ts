import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileController } from './controllers/file.controller';
import { CreateFileInput } from './dto/create-file.input';
import { FileDTO } from './dto/file.dto';
import { UpdateFileInput } from './dto/update-file.input';
import { File } from './entities/files.entity';
import { FilesResolver } from './files.resolver';
import { FilesService } from './files.service';

@Module({
  controllers: [FileController],
  imports: [
    TypeOrmModule.forFeature([File]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([File])],
      resolvers: [
        {
          DTOClass: FileDTO,
          EntityClass: File,
          CreateDTOClass: CreateFileInput,
          UpdateDTOClass: UpdateFileInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
    ConfigModule,
  ],
  exports: [FilesService],
  providers: [FilesResolver, FilesService],
})
export class FilesModule {}
