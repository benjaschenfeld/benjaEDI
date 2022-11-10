import { Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProduct(): string {
    return this.productsService.getProducts();
  }
  @Post()
  addProduct(): string {
    return this.productsService.addProducts();
  }
}
