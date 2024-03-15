import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsPositive } from 'class-validator';
import { UpdateFieldInput } from '../../fields/dto/update-field.input';
@InputType()
export class CreateProductionInput {
  @Field()
  name: string;

  @Field()
  @IsNumber()
  @IsPositive()
  amount: number;

  @Field(() => [UpdateFieldInput], { nullable: true })
  fields: UpdateFieldInput;
}
