import { InputType, Field } from '@nestjs/graphql';

import { IsNumber, IsPositive } from 'class-validator';
import { UpdateFieldInput } from 'src/modules/fields/dto/update-field.input';
@InputType()
export class CreateInventoryInput {
  @Field()
  name: string;

  @Field()
  storage: string;

  @Field()
  provider: string;

  @Field()
  @IsNumber()
  @IsPositive()
  amount: number;

  @Field({ nullable: true })
  @IsNumber()
  @IsPositive()
  value?: number;

  @Field(() => [UpdateFieldInput], { nullable: true })
  fields: UpdateFieldInput;
}
