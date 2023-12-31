import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Roles } from '../decorator/auth-role-decorator';
import { Field } from '../fields/entities/field.entity';
import { Role } from '../roles/entities/role.entity';
import { RolesService } from '../roles/roles.service';
import { CreateInventoryInput } from './dto/create-inventory.input';
import { InventoryDTO } from './dto/inventory.dto';
import { UpdateInventoryInput } from './dto/update-inventory.input';
import { Inventory } from './entities/inventory.entity';
import { Storage } from '../storage/entities/storage.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([Inventory, Field, Role, Storage]),
      ],
      resolvers: [
        {
          DTOClass: InventoryDTO,
          EntityClass: Inventory,
          CreateDTOClass: CreateInventoryInput,
          UpdateDTOClass: UpdateInventoryInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
          read: {
            decorators: [Roles('SUPER_ADMIN')],
          },
        },
      ],
    }),
  ],
  providers: [RolesService],
})
export class InventorysModule {}
