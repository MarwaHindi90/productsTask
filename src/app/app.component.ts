import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from "./categories/categories.component";
import { ProductsComponent } from "./products/products.component";
import { ProductsServiceService } from './core/services/products-service.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './core/pipes/search.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesComponent, ProductsComponent,FormsModule,SearchPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'productsTask';
  searchText: string = '';
  constructor(private _productsService: ProductsServiceService) { }

  selectedCategoryId!: number;

  onCategorySelected(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

}
