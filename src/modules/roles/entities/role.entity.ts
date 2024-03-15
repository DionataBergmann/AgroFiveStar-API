import { BaseEntity } from '../../base/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, Index, ManyToMany } from 'typeorm';

@Entity()
@Index('role_name_unique', ['name'], {
  unique: true,
  where: 'deleted_at is NULL',
})
export class Role extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => User, (user) => user.roles, { nullable: true })
  users?: User[];
}
