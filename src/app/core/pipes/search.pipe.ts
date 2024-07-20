import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], searchText: string): any {

    return products.filter(product => {
      searchText = searchText.toLowerCase();
      return product.name.toLowerCase().includes(searchText)  || 
      product.price.toString().includes(searchText);
    });
  }
  }


