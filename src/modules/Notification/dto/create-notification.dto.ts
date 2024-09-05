import { Field } from "@nestjs/graphql";

export class CreateNotificationDto {
  
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  userId: number;
}
