import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Task extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column({ nullable: true })
  dayOfWeek: number;

  @Column({ nullable: true })
  userName: string;
}
