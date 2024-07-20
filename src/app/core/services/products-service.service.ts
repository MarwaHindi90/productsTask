import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  categories = [
  {
    id: 1,
    name: 'All Products',
  },
  {
    id: 2,
    name: 'Mobile',
  },
  {
    id: 3,
    name: 'Laptop',
  },
  {
    id: 4,
    name: 'Accessories',
  },
  {
    id: 5,
    name: 'Printers',
  },
  
]
products = [
    {
    id: 1,
    name: "IPhone",
    price: 20000,
    description: 'This is product iphone ...',
    image: '/assets/images/iphone.png',
    quantity: 5,
    categoryId: 2,
    },
    {
    id: 2,
    name: 'Oppo 16',
    price: 19.99,
    description: 'This is oppo',
    image: '/assets/images/oppo.png',
    quantity: 10,
    categoryId: 2,
    },
    {
    id: 3,
    name: 'nokia',
    price: 7.99,
    description: 'This is nokia',
    image: '/assets/images/nokia.png',
    quantity: 3,
    categoryId: 3,
    },
    {
    id: 4,
    name: 'HP ',
    price: 35.99,
    description: 'This is Laptop',
    image: '/assets/images/hp.png',
    quantity: 3,
    categoryId: 3,
    },
    {
    id: 5,
    name: 'Dell ',
    price: 55.99,
    description: 'This is Laptop',
    image: '/assets/images/delll.png',
    quantity: 2,
    categoryId: 3,
    },
    {
    id: 6,
    name: 'Lenovo ',
    price: 65.99,
    description: 'This is Laptop',
    image: '/assets/images/lenovo.png',
    quantity: 1,
    categoryId: 3,
    },
    {
    id: 7,
    name: 'HeadPhone ',
    price: 1000,
    description: 'This is Accessories',
    image: '/assets/images/headphone.png',
    quantity: 1,
    categoryId: 3,
    },
    {
    id: 8,
    name: 'airpods ',
    price: 18.99,
    description: 'This is airpods',
    image: '/assets/images/airpods.png',
    quantity: 1,
    categoryId: 4,
    },
    {
    id: 9,
    name: 'mouse ',
    price: 750,
    description: 'This is mouse',
    image: '/assets/images/mouse.png',
    quantity: 1,
    categoryId: 4,
    },
    {
      id: 10,
      name: 'Oppo 8',
      price: 13000,
      description: 'This is oppo',
      image: '/assets/images/oppo2.png',
      quantity: 10,
      categoryId: 4,
      },
      {
        id: 11,
        name: 'Acer',
        price: 37000,
        description: 'This is Laptop acer',
        image: '/assets/images/hp.png',
        quantity: 3,
        categoryId: 3,
        },
        {
          id: 12,
          name: 'samsung s20',
          price: 45000,
          description: 'This is samsung',
          image: '/assets/images/galaxy.png',
          quantity: 0,
          categoryId: 2,
          },
        {
          id: 13,
          name: 'samsung',
          price: 25000,
          description: 'This is samsung printer',
          image: '/assets/images/printers.png',
          quantity: 3,
          categoryId: 5,
          },
        {
          id: 14,
          name: 'Sonny',
          price: 25000,
          description: 'This is Sonny printer',
          image: '/assets/images/sonny.png',
          quantity: 0,
          categoryId: 5,
          },
];
selectedCategoryId!: number;
getProductsByCategory(categoryId: number){
  return this.products.filter(product=>product.categoryId===categoryId);
}
getCategories() {
  return this.categories;
}
getAllProducts() {
  return this.products;

}
// getAllProducts(id:number) {
//   return this.products.find(product=>product.id===id);
// }
  constructor() { }
}
