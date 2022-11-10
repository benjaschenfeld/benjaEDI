import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductsService } from './products/products.service';
import { EdiController } from './api/edi/edi.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductController, EdiController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
