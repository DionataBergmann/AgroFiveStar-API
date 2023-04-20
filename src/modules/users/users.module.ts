import { Module } from '@nestjs/common';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { User } from './entities/user.entity';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { UserDTO } from './dto/user.dto';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './dto/create-user.input';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { Role } from '../roles/entities/role.entity';
import { RolesService } from '../roles/roles.service';
import { Roles } from '../decorator/auth-role-decorator';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([User, Role])],
      services: [RolesService],
      resolvers: [
        {
          DTOClass: UserDTO,
          EntityClass: User,
          CreateDTOClass: CreateUserInput,
          UpdateDTOClass: UpdateUserInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
          read: { decorators: [Roles('SUPER_ADMIN')] },
        },
      ],
    }),
  ],
  exports: [UsersService],
  providers: [UsersService, UsersResolver, RolesService],
})
export class UsersModule {}
