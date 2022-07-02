import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateInventoryInput } from './create-inventory.input';

@InputType()
export class UpdateInventoryInput extends PartialType(CreateInventoryInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
