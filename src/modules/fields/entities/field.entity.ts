import { BaseEntity } from 'src/modules/base/entities/base.entity';

import { Column, Entity } from 'typeorm';

@Entity()
export class Field extends BaseEntity {
  @Column()
  name: string;

  @Column()
  acre: string;

  @Column()
  imageUrl: string;
}
