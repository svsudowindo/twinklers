import { TopbarService } from './../../../shared/shared/components/topbar/topbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isCollapsed = true;
  products = [
    {
      name: 'Product 1',
      imageURL: 'assets/images/products/product-1.jpg',
      status: 'INSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 1
    },
    {
      name: 'Product 2',
      imageURL: '../../../assets/images/products/product-2.jfif',
      status: 'INSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 2
    },
    {
      name: 'Product 3',
      imageURL: '../../../assets/images/products/product-3.jfif',
      status: 'INSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 3
    },
    {
      name: 'Product 4',
      imageURL: '../../../assets/images/products/product-4.jpg',
      status: 'INSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 4
    },
    {
      name: 'Product 5',
      imageURL: '../../../assets/images/products/product-5.jfif',
      status: 'NOSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 5
    },
    {
      name: 'Product 6',
      imageURL: '../../../assets/images/products/product-6.jfif',
      status: 'NOSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 6
    },
    {
      name: 'Product 7',
      imageURL: '../../../assets/images/products/product-7.jpg',
      status: 'NOSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 7
    },
    {
      name: 'Product 8',
      imageURL: '../../../assets/images/products/product-8.jfif',
      status: 'NOSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 8
    }
  ];
  constructor(
    private topBarService: TopbarService
  ) { }

  ngOnInit() {
    this.topBarService.setCartCount(this.products);
  }

  incrementProductCount(productDetails, index) {
    this.products[index].productCount = this.products[index].productCount + 1;
    this.topBarService.setCartCount(this.products);
  }

  decrementProductCount(productDetails, index) {
    this.products[index].productCount = this.products[index].productCount - 1;
    this.topBarService.setCartCount(this.products);
  }
}
