import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ProductCardComponent
  ]
})
export class SharedModule { }
