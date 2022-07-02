import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsPositive } from 'class-validator';
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
  amount: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsPositive()
  value?: string;
}
