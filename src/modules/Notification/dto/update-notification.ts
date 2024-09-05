import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateNotificationInput } from './create-notification.dto';

@InputType()
export class UpdateNotificationInput extends PartialType(CreateNotificationInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
