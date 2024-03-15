import { BaseEntity } from '../../base/entities/base.entity';
import { Field } from '../../fields/entities/field.entity';
import { Storage } from '../../storage/entities/storage.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity('inventory')
export class Inventory extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
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

  @ManyToMany(() => Storage, (fields) => fields.inventories, {
    nullable: true,
    cascade: true,
  })
  @JoinTable()
  storages: Storage;
}
