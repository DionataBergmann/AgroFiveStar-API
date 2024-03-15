import { BaseEntity } from '../../base/entities/base.entity';
import { Inventory } from '../../inventory/entities/inventory.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity('storage')
export class Storage extends BaseEntity {
  @Column()
  name: string;

  @Column()
  amount: number;

  @ManyToMany(() => Inventory, (inventories) => inventories.storages, {
    nullable: true,
  })
  inventories: Inventory;
}
