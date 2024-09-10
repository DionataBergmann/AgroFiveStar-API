import { InputType, Field } from '@nestjs/graphql';
import { TaskStatus } from '../taskStatusEnum';

@InputType()
export class CreateTaskInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  date: Date;

  @Field({ nullable: true })
  dayOfWeek: number;

  @Field({ nullable: true })
  userName: string;

  @Field({ nullable: true })
  userId: string;

  @Field(() => TaskStatus, { defaultValue: TaskStatus.PENDING })
  status: TaskStatus;
}
