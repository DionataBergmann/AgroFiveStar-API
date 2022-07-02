import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';

@ObjectType('Production')
export class ProductionDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  amount: string;
}
