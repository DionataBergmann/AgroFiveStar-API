import { Column, Entity } from 'typeorm';

import { hashPasswordTransform } from 'src/modules/helpers/crypto';
import { BaseEntity } from 'src/modules/base/entities/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  CPF: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @Column({
    transformer: hashPasswordTransform,
    nullable: true,
  })
  password?: string;
}
