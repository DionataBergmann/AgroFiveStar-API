import { BaseEntity } from 'src/modules/base/entities/base.entity';

import { Column, Entity } from 'typeorm';

@Entity()
export class Production extends BaseEntity {
  @Column()
  name: string;

  @Column()
  amount: string;
}
