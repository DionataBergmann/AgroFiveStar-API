import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateStorageInput } from './create-storage.input';

@InputType()
export class UpdateStorageInput extends PartialType(CreateStorageInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
