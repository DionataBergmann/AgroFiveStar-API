import { FilterableRelation } from '@nestjs-query/query-graphql';
import { BaseEntity } from '../../base/entities/base.entity';
import { FieldDTO } from '../../fields/dto/field.dto';
import { Column, Entity, ManyToOne } from 'typeorm';

@FilterableRelation('fields', () => FieldDTO, { nullable: true })
@Entity()
export class File extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  path?: string;

  @Column({ nullable: true })
  fileName: string;

  @Column({ name: 'file_size', nullable: true })
  fileSize: string;

  @Column({ name: 'file_format', nullable: true })
  fileFormat: string;

  @Column({ name: 'original_file_name', nullable: true })
  originalFileName: string;

  @Column({ nullable: true, default: false })
  isPrivate: boolean;
}
