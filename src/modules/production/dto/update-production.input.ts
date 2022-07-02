import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateProductionInput } from './create-production.input';

@InputType()
export class UpdateProductionInput extends PartialType(CreateProductionInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
