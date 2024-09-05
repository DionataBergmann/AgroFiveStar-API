import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Notification } from './entities/notification.entity';
import { NotificationDTO } from './dto/notification.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Notification])],
      resolvers: [
        {
          DTOClass: NotificationDTO,
          EntityClass: Notification,
          enableTotalCount: true, 
          pagingStrategy: PagingStrategies.OFFSET, 
        },
      ],
    }),
  ],
})
export class NotificationModule {}
