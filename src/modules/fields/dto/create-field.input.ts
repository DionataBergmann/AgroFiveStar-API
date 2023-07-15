import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsPositive } from 'class-validator';
@InputType()
export class CreateFieldInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  acre: string;

  @Field({ nullable: true })
  cordinates: string;

  @Field({ nullable: true })
  imagePath: string;
}
