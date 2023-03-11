import { Field, InputType } from '@nestjs/graphql';

@InputType('AuthInput')
export class AuthInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
