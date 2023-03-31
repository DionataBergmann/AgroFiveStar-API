import { Module } from '@nestjs/common'

import {
  NestjsQueryGraphQLModule,
  PagingStrategies
} from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'

import { RoleInputDTO, RoleTypeDTO } from './dto/role.dto'
import { Role } from './entities/role.entity'
import { RolesService } from './roles.service'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Role])],
      services: [RolesService],
      resolvers: [
        {
          DTOClass: RoleTypeDTO,
          EntityClass: Role,
          CreateDTOClass: RoleInputDTO,
          ServiceClass: RolesService,
          pagingStrategy: PagingStrategies.OFFSET,
          create: { disabled: true },
          delete: { disabled: true },
          update: { disabled: true }
        }
      ]
    })
  ],
  providers: [RolesService],
  exports: [RolesService]
})
export class RolesModule {}
