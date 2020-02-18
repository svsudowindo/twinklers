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

  @Output()
  cardClickEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementProductCount() {
    this.addItem.emit(this.product);
  }

  decrementProductCount() {
    this.removeItem.emit(this.product);
  }

  navigateToDetailedView() {
    this.cardClickEvent.emit(this.product);
  }
}
