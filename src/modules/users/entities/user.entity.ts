import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { hashPasswordTransform } from 'src/modules/helpers/crypto';
import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Notification } from 'src/modules/Notification/entities/notification.entity';
import { Task } from 'src/modules/tasks/entities/task.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  CPF: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  telephone: string;

  @Column({
    transformer: hashPasswordTransform,
    nullable: false,
  })
  password?: string;

  @ManyToMany(() => Role, (role) => role.users, { nullable: true, eager: true })
  @JoinTable()
  roles?: Role[];

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];
}
