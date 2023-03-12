import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { File } from 'src/modules/files/entities/files.entity';
import { Inventory } from 'src/modules/inventory/entities/inventory.entity';
import { Production } from 'src/modules/production/entities/production.entity';
import { Column, Entity, JoinColumn, ManyToMany, OneToOne } from 'typeorm';

@Entity()
export class Field extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: 'integer' })
  acre: number;

  @Column({ nullable: true })
  imagePath: string;

  @OneToOne(() => File, {
    onDelete: 'SET NULL',
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  fieldImage?: File;

  @ManyToMany(() => Inventory, (inventories) => inventories.fields, {
    nullable: true,
  })
  inventories: Inventory;

  @ManyToMany(() => Production, (productions) => productions.fields, {
    nullable: true,
  })
  productions: Production;
}
