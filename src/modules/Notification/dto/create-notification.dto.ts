import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateNotificationInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({nullable: true})
  userId: string;
}
