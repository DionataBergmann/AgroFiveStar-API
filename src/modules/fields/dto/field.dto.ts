import {
  FilterableField,
  FilterableRelation,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../base/dto/base.dto';
import { FileDTO } from '../../files/dto/file.dto';
import { InventoryDTO } from '../../inventory/dto/inventory.dto';
import { ProductionDTO } from '../../production/dto/production.dto';

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
  acre?: string;

  @FilterableField({ nullable: true })
  cordinates: string;

  @FilterableField({ nullable: true })
  imagePath: string;
}
