import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';

@ObjectType('Field')
export class FieldDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  acre?: string;

  @FilterableField()
  imageUrl: string;
}
