import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { IndexComponent } from './index/index.component';
import { RouteModule } from './Routes/route.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { HeaderComponent } from './index/header/header.component';
import { ReviewsComponent } from './index/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NotfoundComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
    NavbarComponent,
    HeaderComponent,
    ReviewsComponent,
  ],
  imports: [BrowserModule, RouteModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
