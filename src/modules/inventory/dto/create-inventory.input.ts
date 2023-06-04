import { InputType, Field } from '@nestjs/graphql';

import { IsNumber, IsPositive } from 'class-validator';
import { UpdateFieldInput } from 'src/modules/fields/dto/update-field.input';
import { UpdateStorageInput } from 'src/modules/storage/dto/update-storage';
@InputType()
export class CreateInventoryInput {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  storage: string;

  @Field({ nullable: true })
  provider: string;

  @Field()
  @IsNumber()
  @IsPositive()
  amount: number;

  @Field({ nullable: true })
  @IsNumber()
  @IsPositive()
  value?: number;

  @Field(() => [UpdateFieldInput], { nullable: true })
  fields: UpdateFieldInput;

  @Field(() => [UpdateStorageInput], { nullable: true })
  storages: UpdateStorageInput;
}
