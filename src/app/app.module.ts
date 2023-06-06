import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { IndexComponent } from './index/index.component';
import { RouteModule } from './Routes/route.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { HeaderComponent } from './index/header/header.component';
import { ReviewsComponent } from './index/reviews/reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { ViewPropertiesComponent } from './components/view-properties/view-properties.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtTokenInterceptor } from 'src/Extension/request.interceptor';
import { HeroComponent } from './components/hero/hero.component';
import { AdminModule } from 'src/app/components/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HeaderComponent,
    ReviewsComponent,
    FooterComponent,
    PropertiesComponent,
    ViewPropertiesComponent,
    HeroComponent
  ],
  imports: [BrowserModule, AdminModule ,RouteModule,ReactiveFormsModule,HttpClientModule,FormsModule],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtTokenInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
