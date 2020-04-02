import { NgModule } from '@angular/core';

// Custom Directives
import { CommonModule } from '@angular/common';
import { HighlightSearchPipe } from '../../pipes/highlight-search.pipe';

@NgModule({
  declarations: [
    HighlightSearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightSearchPipe
  ]
})
export class CustomModule { }
