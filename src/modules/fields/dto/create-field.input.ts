import { InputType, Field } from '@nestjs/graphql';

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
