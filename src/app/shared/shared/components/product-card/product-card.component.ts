import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product: any;

  @Output()
  addItem: EventEmitter<any> = new EventEmitter();

  @Output()
  removeItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementProductCount(product) {
    this.addItem.emit(product);
  }

  decrementProductCount(product) {
    this.removeItem.emit(product);
  }
}
