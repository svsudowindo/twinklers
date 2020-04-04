import { NgModule } from '@angular/core';

// Custom Directives
import { CommonModule } from '@angular/common';
import { HighlightSearchPipe } from '../../pipes/highlight-search.pipe';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@NgModule({
  declarations: [
    HighlightSearchPipe,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightSearchPipe,
    ProductCardComponent
  ]
})
export class CustomModule { }
