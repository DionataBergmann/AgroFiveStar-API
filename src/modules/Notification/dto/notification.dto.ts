import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Notification')
export class NotificationDTO {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  userId: string; 
}
