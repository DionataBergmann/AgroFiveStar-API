import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';

import { Role } from './entities/role.entity';

import { Repository } from 'typeorm';

@Injectable()
export class RolesService extends TypeOrmQueryService<Role> {
  constructor(
    @InjectRepository(Role)
    public repository: Repository<Role>,
  ) {
    super(repository, { useSoftDelete: true });
  }

  async findByName(name: string): Promise<Role> {
    return await this.repository.findOneOrFail({ where: { name } });
  }

  async findByNames(names: string[]): Promise<Role[]> {
    return this.repository.find({
      where: names.map((name) => ({ name })),
    });
  }
}
