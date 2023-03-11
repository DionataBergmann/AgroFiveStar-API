import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, HideField, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserDTO {
  @Field()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  CPF: string;

  @FilterableField()
  email: string;

  @FilterableField()
  telephone: string;

  @HideField()
  password?: string;
}
