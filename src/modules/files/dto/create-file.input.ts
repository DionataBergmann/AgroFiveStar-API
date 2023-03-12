import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFileInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  readonly id?: string;

  @Field({ nullable: true })
  readonly fileName?: string;

  @Field({ nullable: true })
  readonly filePath?: string;
}
