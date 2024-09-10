import { FilterableField, FilterableRelation, PagingStrategies } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { TaskStatus } from '../taskStatusEnum';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { UserDTO } from 'src/modules/users/dto/user.dto';

@ObjectType('Task')
@FilterableRelation('user', () => UserDTO, {
  nullable: true,
  pagingStrategy: PagingStrategies.NONE,
})
export class TaskDTO extends BaseDTO{
  @FilterableField()
  title: string;

  @FilterableField()
  description: string;

  @FilterableField()
  date: Date;

  @FilterableField({ nullable: true })
  dayOfWeek: number;

  @FilterableField({ nullable: true })
  userName: string;

  @FilterableField({ nullable: true })
  userId: string;

  @FilterableField(() => TaskStatus) 
  status: TaskStatus;
}
