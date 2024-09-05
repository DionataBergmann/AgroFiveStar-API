import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Notification } from './entities/notification.entity';
import { NotificationDTO } from './dto/notification.dto';
import { CreateNotificationInput } from './dto/create-notification.dto';
import { Roles } from '../decorator/auth-role-decorator';
import { UpdateNotificationInput } from './dto/update-notification';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Notification])],
      resolvers: [
        {
          DTOClass: NotificationDTO,
          EntityClass: Notification,
          CreateDTOClass: CreateNotificationInput,
          UpdateDTOClass: UpdateNotificationInput,
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
export class NotificationModule {}
