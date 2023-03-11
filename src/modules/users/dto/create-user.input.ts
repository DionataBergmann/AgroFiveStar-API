import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  CPF: string;

  @Field()
  email: string;

  @Field()
  telephone: string;

  @Field({ nullable: true })
  password?: string;
}
