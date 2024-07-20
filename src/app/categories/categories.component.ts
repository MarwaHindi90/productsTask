import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsServiceService } from '../core/services/products-service.service';
import { IProduct } from '../core/models/IProduct';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Output() categorySelected = new EventEmitter<number>();
  constructor(private _productsService: ProductsServiceService) { 
  }

  get categories() {
    return this._productsService.getCategories();
  }

  onCategoryChange(event: any) {
    let categoryId = Number(event.target.value);
    this.categorySelected.emit(categoryId);
  }
  get Allproducts() {
    return this._productsService.getAllProducts();
  }
  
}
