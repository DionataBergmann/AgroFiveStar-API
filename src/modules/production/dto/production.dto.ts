import {
  FilterableRelation,
  FilterableField,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { FieldDTO } from 'src/modules/fields/dto/field.dto';

@ObjectType('Production')
@FilterableRelation('fields', () => FieldDTO, {
  nullable: true,
  pagingStrategy: PagingStrategies.NONE,
})
export class ProductionDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  amount: number;
}
