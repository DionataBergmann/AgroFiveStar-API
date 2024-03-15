import { BaseEntity } from '../../base/entities/base.entity';
import { File } from '../../files/entities/files.entity';
import { Inventory } from '../../inventory/entities/inventory.entity';
import { Production } from '../../production/entities/production.entity';
import { Column, Entity, JoinColumn, ManyToMany, OneToOne } from 'typeorm';

@Entity()
export class Field extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  acre: string;

  @Column({ nullable: true })
  cordinates: string;

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
