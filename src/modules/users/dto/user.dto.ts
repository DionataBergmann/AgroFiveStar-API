import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, HideField, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserDTO {
  @Field()
  id: string;

  @FilterableField({ nullable: false })
  name: string;

  @FilterableField({ nullable: true })
  CPF: string;

  @FilterableField({ nullable: false })
  email: string;

  @FilterableField({ nullable: true })
  telephone: string;

  @HideField()
  password?: string;
}
