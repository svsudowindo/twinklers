import { AdminLayoutComponent } from './shared/shared/components/layouts/admin-layout/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TopbarComponent } from './shared/shared/components/topbar/topbar.component';
import { AuthLayoutComponent } from './shared/shared/components/layouts/auth-layout/auth-layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptorsService } from './shared/services/http/header-interceptors.service';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    AuthLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorsService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
