import {
  FilterableRelation,
  FilterableField,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { FieldDTO } from 'src/modules/fields/dto/field.dto';

@ObjectType('Inventory')
@FilterableRelation('fields', () => FieldDTO, {
  nullable: true,
  pagingStrategy: PagingStrategies.NONE,
})
export class InventoryDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  storage: string;

  @FilterableField()
  provider: string;

  @FilterableField()
  amount: number;

  @FilterableField({ nullable: true })
  value: number;
}
