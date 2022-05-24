import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

import { CreateFieldInput } from './dto/create-field.input';
import { FieldDTO } from './dto/field.dto';
import { UpdateFieldInput } from './dto/update-field.input';
import { Field } from './entities/field.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Field])],
      resolvers: [
        {
          DTOClass: FieldDTO,
          EntityClass: Field,
          CreateDTOClass: CreateFieldInput,
          UpdateDTOClass: UpdateFieldInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class FieldsModule {}
