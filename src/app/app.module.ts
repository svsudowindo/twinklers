import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { TopbarComponent } from './shared/shared/components/topbar/topbar.component';
import { AdminProductsListComponent } from './views/admin-views/admin-products-list/admin-products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    AdminProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
