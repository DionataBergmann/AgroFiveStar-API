import {
  FilterableField,
  FilterableRelation,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../base/dto/base.dto';
import { InventoryDTO } from '../../inventory/dto/inventory.dto';

@ObjectType('Storage')
@FilterableRelation('inventories', () => InventoryDTO, {
  nullable: true,
  pagingStrategy: PagingStrategies.NONE,
})
export class StorageDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  amount: number;
}
