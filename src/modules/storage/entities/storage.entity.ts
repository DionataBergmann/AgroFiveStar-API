import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Inventory } from 'src/modules/inventory/entities/inventory.entity';
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
