import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsPositive } from 'class-validator';
@InputType()
export class CreateFieldInput {
  @Field()
  name: string;

  @Field()
  @IsNumber()
  @IsPositive()
  acre: number;

  @Field({ nullable: true })
  imagePath: string;
}
