import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateTaskInput } from './create-task.input';
import { TaskStatus } from '../taskStatusEnum';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field(() => TaskStatus, { nullable: true }) 
  status?: TaskStatus;
}
