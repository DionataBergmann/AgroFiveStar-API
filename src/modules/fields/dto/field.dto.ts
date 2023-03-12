import {
  FilterableField,
  FilterableRelation,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { FileDTO } from 'src/modules/files/dto/file.dto';
import { InventoryDTO } from 'src/modules/inventory/dto/inventory.dto';
import { ProductionDTO } from 'src/modules/production/dto/production.dto';

@ObjectType('Field')
@FilterableRelation('fieldImage', () => FileDTO, { nullable: true })
@FilterableRelation('inventories', () => InventoryDTO, {
  nullable: true,
  pagingStrategy: PagingStrategies.NONE,
})
@FilterableRelation('productions', () => ProductionDTO, {
  nullable: true,
  pagingStrategy: PagingStrategies.NONE,
})
export class FieldDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  acre?: number;

  @FilterableField({ nullable: true })
  imagePath: string;
}
