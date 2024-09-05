import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Entity, Column, ManyToOne, JoinColumn} from 'typeorm';

@Entity('notification')
export class Notification extends BaseEntity {
  @Column({ length: 100 })
  title: string;

  @Column('text')
  description: string;

  @Column({nullable: true})
  userId?: string;

  // Define a relação ManyToOne
  @ManyToOne(() => User, (user) => user.notifications)
  @JoinColumn({ name: 'userId' })
  user: User;
}
