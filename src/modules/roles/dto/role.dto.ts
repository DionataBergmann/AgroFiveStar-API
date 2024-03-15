import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { FilterableField } from '@nestjs-query/query-graphql';

import { IsNotEmpty, IsString } from 'class-validator';
import { RolesEnum } from '../roles.enum';
import { BaseDTO } from '../../base/dto/base.dto';

@InputType('RoleInput')
@ObjectType()
export class RoleInputDTO {
  @Field()
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo Nome deve estar preenchido' })
  @FilterableField(() => RolesEnum, { nullable: true })
  name: string;
}

@ObjectType('Role')
export class RoleTypeDTO extends BaseDTO {
  @FilterableField(() => RolesEnum)
  name?: string;
}
