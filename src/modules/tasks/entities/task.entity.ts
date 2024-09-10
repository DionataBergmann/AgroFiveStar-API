import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { TaskStatus } from '../taskStatusEnum';
import { User } from 'src/modules/users/entities/user.entity';

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

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @Column({ nullable: true })
  userId: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.PENDING })
  status: TaskStatus;
}
