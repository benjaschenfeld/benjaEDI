import { Controller, Get } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Controller('api/edi')
export class EdiController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProduct(): string {
    return this.productsService.getProducts();
  }
}
