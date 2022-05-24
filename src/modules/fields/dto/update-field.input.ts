import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateFieldInput } from './create-field.input';

@InputType()
export class UpdateFieldInput extends PartialType(CreateFieldInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
