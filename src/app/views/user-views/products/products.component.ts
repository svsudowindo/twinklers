import { TopbarService } from './../../../shared/shared/components/topbar/topbar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isCollapsed = true;
  products = [];
  constructor(
    private topBarService: TopbarService,
    private router: Router
  ) {
    this.products = this.topBarService.products;
  }

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

  navigateToProductDetailedView(event) {
    this.router.navigate(['products', event.id]);
  }
}
