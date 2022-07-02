import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateInventoryInput } from './dto/create-inventory.input';
import { InventoryDTO } from './dto/inventory.dto';
import { UpdateInventoryInput } from './dto/update-inventory.input';
import { Inventory } from './entities/inventory.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Inventory])],
      resolvers: [
        {
          DTOClass: InventoryDTO,
          EntityClass: Inventory,
          CreateDTOClass: CreateInventoryInput,
          UpdateDTOClass: UpdateInventoryInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class InventorysModule {}
