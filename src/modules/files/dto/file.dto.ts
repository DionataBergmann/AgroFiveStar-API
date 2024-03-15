import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../base/dto/base.dto';

@ObjectType('File')
export class FileDTO extends BaseDTO {
  @FilterableField({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  readonly fileName?: string;

  @Field({ nullable: true })
  readonly filePath?: string;
}
