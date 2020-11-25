import { CommonService } from './../../../services/common/common.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopbarService {
  cartCount = 0;
  cartCountSubject = new BehaviorSubject(0);

  userInfoChanged = new BehaviorSubject(false);
  // sample

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
      imageURL: 'assets/images/products/product-2.jfif',
      status: 'INSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 2
    },
    {
      name: 'Product 3',
      imageURL: 'assets/images/products/product-3.jfif',
      status: 'INSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 3
    },
    {
      name: 'Product 4',
      imageURL: 'assets/images/products/product-4.jpg',
      status: 'INSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 4
    },
    {
      name: 'Product 5',
      imageURL: 'assets/images/products/product-5.jfif',
      status: 'NOSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 5
    },
    {
      name: 'Product 6',
      imageURL: 'assets/images/products/product-6.jfif',
      status: 'NOSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 6
    },
    {
      name: 'Product 7',
      imageURL: 'assets/images/products/product-7.jpg',
      status: 'NOSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 7
    },
    {
      name: 'Product 8',
      imageURL: 'assets/images/products/product-8.jfif',
      status: 'NOSTOCK',
      productCount: 0,
      rating: 3,
      cost: 200,
      id: 8
    }
  ];
  constructor(
    private commonService: CommonService
  ) { }

  setCartCount(productArray) {
    const totalCartCount = productArray.map(obj => obj.productCount).reduce((sum, currentValue) => {
      return sum + currentValue;
    });
    this.cartCountSubject.next(totalCartCount);
  }

  setUserInfoChange(input: boolean) {
    this.userInfoChanged.next(input);
  }
}
