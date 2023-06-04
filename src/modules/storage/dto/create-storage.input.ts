import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsPositive } from 'class-validator';

@InputType()
export class CreateStorageInput {
  @Field()
  name: string;

  @Field()
  @IsNumber()
  @IsPositive()
  amount: number;
}
