import { registerEnumType } from '@nestjs/graphql';

export enum TaskStatus {
  PENDING = 'pending',
  DONE = 'done',
}

registerEnumType(TaskStatus, {
  name: 'TaskStatus', 
});
