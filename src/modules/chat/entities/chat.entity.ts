import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  text: string;

  @CreateDateColumn()
  createdAt: Date;
}
