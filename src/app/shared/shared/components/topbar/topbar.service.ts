import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopbarService {
  cartCount = 0;
  cartCountSubject = new BehaviorSubject(0);
  constructor() { }

  setCartCount(productArray) {
    const totalCartCount = productArray.map(obj => obj.productCount).reduce((sum, currentValue) => {
      return sum + currentValue;
    });
    this.cartCountSubject.next(totalCartCount);
  }
}
