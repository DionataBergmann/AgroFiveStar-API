import { BaseEntity } from 'src/modules/base/entities/base.entity';

import { Column, Entity } from 'typeorm';

@Entity()
export class Inventory extends BaseEntity {
  @Column()
  name: string;

  @Column()
  storage: string;

  @Column()
  provider: string;

  @Column()
  amount: string;

  @Column({ nullable: true })
  value: string;
}
