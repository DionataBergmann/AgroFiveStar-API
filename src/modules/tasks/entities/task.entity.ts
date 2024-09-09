import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Column, Entity } from 'typeorm';
import { TaskStatus } from '../taskStatusEnum';

@Entity()
export class Task extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column({ nullable: true })
  dayOfWeek: number;

  @Column({ nullable: true })
  userName: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.PENDING })
  status: TaskStatus;
}
