import { InputType, Field } from '@nestjs/graphql';
import { RoleInputDTO } from '../../roles/dto/role.dto';

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  CPF: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: true })
  telephone: string;

  @Field({ nullable: false })
  password?: string;

  @Field(() => [RoleInputDTO])
  roles?: RoleInputDTO[];
}
