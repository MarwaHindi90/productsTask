import { TestBed } from '@angular/core/testing';

import { ProductsServiceService } from './core/models/services/products-service.service';

describe('ProductsServiceService', () => {
  let service: ProductsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
