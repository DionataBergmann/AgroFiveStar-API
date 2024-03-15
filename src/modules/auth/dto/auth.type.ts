import { Field, ObjectType } from '@nestjs/graphql';
import { UserDTO } from '../../users/dto/user.dto';

@ObjectType()
export class AuthType {
  @Field(() => UserDTO)
  user: UserDTO;

  @Field()
  token: string;
}
