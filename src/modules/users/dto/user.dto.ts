import {
  FilterableField,
  FilterableUnPagedRelation,
} from '@nestjs-query/query-graphql';
import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { RoleInputDTO } from '../../roles/dto/role.dto';

@ObjectType('User')
@FilterableUnPagedRelation('roles', () => RoleInputDTO)
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
