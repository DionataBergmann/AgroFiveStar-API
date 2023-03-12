import { ConfigService } from '@nestjs/config';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FileDTO } from './dto/file.dto';
import { FilesService } from './files.service';

@Resolver(FileDTO)
export class FilesResolver {
  constructor(
    public fileService: FilesService,
    private configService: ConfigService,
  ) {}

  @ResolveField()
  filePath(@Parent() file: FileDTO): string {
    return `${this.configService.get('STORAGE_URL')}${file.id}`;
  }

  @Mutation(() => Boolean)
  public async deletePhysicalFile(@Args('id') id: string): Promise<boolean> {
    return await this.fileService.deleteFile(id);
  }
}
