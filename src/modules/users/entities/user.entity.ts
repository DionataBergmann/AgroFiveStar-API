import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { hashPasswordTransform } from 'src/modules/helpers/crypto';
import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Role } from 'src/modules/roles/entities/role.entity';

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
}
