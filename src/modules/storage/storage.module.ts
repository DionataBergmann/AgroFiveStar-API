import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Roles } from '../decorator/auth-role-decorator';
import { StorageDTO } from './dto/storage.dto';
import { CreateStorageInput } from './dto/create-storage.input';
import { UpdateStorageInput } from './dto/update-storage';
import { Storage } from './entities/storage.entity';
import { Inventory } from '../inventory/entities/inventory.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Storage, Inventory])],
      resolvers: [
        {
          DTOClass: StorageDTO,
          EntityClass: Storage,
          CreateDTOClass: CreateStorageInput,
          UpdateDTOClass: UpdateStorageInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
          read: {
            decorators: [Roles('SUPER_ADMIN', 'EMPLOYEE')],
          },
        },
      ],
    }),
  ],
  providers: [],
})
export class StorageModule {}
