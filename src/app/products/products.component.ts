import { Component, Input } from '@angular/core';
import { ProductsServiceService } from '../core/services/products-service.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../core/pipes/search.pipe';
import { CurrencyPipe } from '@angular/common';





@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, SearchPipe,CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
   @Input({required: true}) selectedCategoryId!: number;
   searchText: string = '';

  
  constructor(private _productsService: ProductsServiceService) { }

  get products() { 
    if(this.selectedCategoryId === 1) {return this._productsService.getAllProducts()}
    else{
      return this._productsService.getProductsByCategory(this.selectedCategoryId);
    }
  } 

 
}
