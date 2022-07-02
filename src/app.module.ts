import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { FieldsModule } from './modules/fields/fields.module';
import { ImageModule } from './modules/images/image.module';
import { InventorysModule } from './modules/inventory/inventory.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot(),
    FieldsModule,
    InventorysModule,
    ImageModule,
  ],
  providers: [AppService],
})
export class AppModule {}
