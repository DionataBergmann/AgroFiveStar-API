import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { CreateFieldInput } from './dto/create-field.input';
import { FieldDTO } from './dto/field.dto';
import { FieldsService } from './fields.service';
import { Field } from './entities/field.entity';
import { UpdateFieldInput } from './dto/update-field.input';

@Resolver('Fields')
export class FieldsResolver {
  constructor(private fieldService: FieldsService) {}

  @Mutation(() => FieldDTO)
  public async createOneField(
    @Args('data') data: CreateFieldInput,
    @Args({ name: 'fieldImage', type: () => GraphQLUpload, nullable: true })
    fieldImage?: FileUpload,
  ): Promise<Field> {
    const fieldCreated = await this.fieldService.createField(data, fieldImage);
    return fieldCreated;
  }

  @Mutation(() => FieldDTO)
  public async updateOneField(
    @Args('id') id: string,
    @Args('data') data: UpdateFieldInput,
    @Args({ name: 'fieldImage', type: () => GraphQLUpload, nullable: true })
    image?: FileUpload,
  ): Promise<Field> {
    return this.fieldService.updateField(id, data, image);
  }

  @Mutation(() => FieldDTO)
  public async deleteOneFieldAndForget(@Args('id') id: string): Promise<Field> {
    return this.fieldService.deleteAndForget(id);
  }
}
