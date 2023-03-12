import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Field } from '../fields/entities/field.entity';
import { CreateProductionInput } from './dto/create-production.input';
import { ProductionDTO } from './dto/production.dto';
import { UpdateProductionInput } from './dto/update-production.input';
import { Production } from './entities/production.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Production, Field])],
      resolvers: [
        {
          DTOClass: ProductionDTO,
          EntityClass: Production,
          CreateDTOClass: CreateProductionInput,
          UpdateDTOClass: UpdateProductionInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class ProductionModule {}
