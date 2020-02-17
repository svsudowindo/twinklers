import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      name: 'Product 1',
      imageURL: 'assets/images/products/product-1.jpg',
      status: 'INSTOCK',
      productCount: 1,
      rating: 3,
      cost: 200
    },
    {
      name: 'Product 2',
      imageURL: '../../../assets/images/products/product-2.jfif',
      status: 'INSTOCK',
      productCount: 2,
      rating: 3,
      cost: 200
    },
    {
      name: 'Product 3',
      imageURL: '../../../assets/images/products/product-3.jfif',
      status: 'INSTOCK',
      productCount: 3,
      rating: 3,
      cost: 200
    },
    {
      name: 'Product 4',
      imageURL: '../../../assets/images/products/product-4.jpg',
      status: 'INSTOCK',
      productCount: 4,
      rating: 3,
      cost: 200
    },
    {
      name: 'Product 5',
      imageURL: '../../../assets/images/products/product-5.jfif',
      status: 'NOSTOCK',
      productCount: 5,
      rating: 3,
      cost: 200
    },
    {
      name: 'Product 6',
      imageURL: '../../../assets/images/products/product-6.jfif',
      status: 'NOSTOCK',
      productCount: 2,
      rating: 3,
      cost: 200
    },
    {
      name: 'Product 7',
      imageURL: '../../../assets/images/products/product-7.jpg',
      status: 'NOSTOCK',
      productCount: 2,
      rating: 3,
      cost: 200
    },
    {
      name: 'Product 8',
      imageURL: '../../../assets/images/products/product-8.jfif',
      status: 'NOSTOCK',
      productCount: 2,
      rating: 3,
      cost: 200
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
