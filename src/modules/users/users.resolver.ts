import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../decorator/current-user';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserDTO)
  public async getUserByEmail(
    @Args({ name: 'email', type: () => String, nullable: true })
    email?: string,
  ): Promise<UserDTO> {
    return await this.usersService.getUserByEmail(email);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => UserDTO)
  public async getOneUser(
    @Args({ name: 'id', type: () => String })
    id: string,
  ): Promise<UserDTO> {
    return this.usersService.getUserById(id);
  }

  @Query(() => UserDTO)
  @UseGuards(GqlAuthGuard)
  public async me(@CurrentUser() user: User): Promise<UserDTO> {
    return this.usersService.getUserById(user.id);
  }
}
