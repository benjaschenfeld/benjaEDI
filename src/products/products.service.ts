import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts(): string {
    return 'Notebook';
  }

  addProducts(): string {
    return 'cable USB';
  }
}
