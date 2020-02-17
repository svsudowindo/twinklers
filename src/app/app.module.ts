import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { TopbarComponent } from './shared/shared/components/topbar/topbar.component';
import { LoginComponent } from './views/login/login.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import{RegistrationComponent} from './views/registration/registration.component'

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    RegistrationComponent
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
