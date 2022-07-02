import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';

@ObjectType('Inventory')
export class InventoryDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  storage: string;

  @FilterableField()
  provider: string;

  @FilterableField()
  amount: string;

  @FilterableField({ nullable: true })
  value: string;
}
