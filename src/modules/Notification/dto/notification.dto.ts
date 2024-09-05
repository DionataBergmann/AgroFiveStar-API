import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Notification')
export class NotificationDTO {
  @FilterableField() 
  id: string;

  @FilterableField() 
  title: string;

  @FilterableField() 
  description: string;

  @FilterableField() 
  userId: string;
}
