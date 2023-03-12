import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Field } from 'src/modules/fields/entities/field.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity('inventory')
export class Inventory extends BaseEntity {
  @Column()
  name: string;

  @Column()
  storage: string;

  @Column()
  provider: string;

  @Column()
  amount: number;

  @Column({ nullable: true })
  value: number;

  @ManyToMany(() => Field, (fields) => fields.inventories, {
    nullable: true,
    cascade: true,
  })
  @JoinTable()
  fields: Field;
}
