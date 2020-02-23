import { Component, OnInit } from '@angular/core';
import { TopbarService } from 'src/app/shared/shared/components/topbar/topbar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  selectedProduct: any;
  productList: any;
  comments = [
    {
      userName: 'K Sai Kumar',
      rating: 3,
      comment: 'Awsome .... Super flavour'
    },
    {
      userName: 'K Sai Kumar',
      rating: 3,
      comment: 'Awsome .... Super flavour'
    }
  ];
  constructor(
    private topBarService: TopbarService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productList = this.topBarService.products;
    const id = +this.activatedRoute.snapshot.params.id;
    const index = this.productList.findIndex(obj => obj.id === id);
    if (index !== -1) {
      this.selectedProduct = this.productList[index];
    }
  }

  ngOnInit() {
  }

}
