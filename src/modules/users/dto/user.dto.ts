import {
  FilterableField,
  FilterableUnPagedRelation,
} from '@nestjs-query/query-graphql';
import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { NotificationDTO } from 'src/modules/Notification/dto/notification.dto';
import { RoleInputDTO } from 'src/modules/roles/dto/role.dto';

@ObjectType('User')
@FilterableUnPagedRelation('roles', () => RoleInputDTO)
@FilterableUnPagedRelation('notifications', () => NotificationDTO)
export class UserDTO {
  @FilterableField()
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
