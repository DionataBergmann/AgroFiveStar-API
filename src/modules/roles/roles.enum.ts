import { registerEnumType } from '@nestjs/graphql';

export enum RolesEnum {
  'SUPER_ADMIN' = 'SUPER_ADMIN',
  'EMPLOYEE' = 'EMPLOYEE',
}

registerEnumType(RolesEnum, {
  name: 'RolesEnum',
});
