import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { IndexComponent } from './index/index.component';
import { RouteModule } from './Routes/route.module';
import { NavbarComponent } from './index/navbar/navbar.component';
import { HeaderComponent } from './index/header/header.component';
import { ReviewsComponent } from './index/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NotfoundComponent,
    IndexComponent,
    NavbarComponent,
    HeaderComponent,
    ReviewsComponent,
  ],
  imports: [BrowserModule, RouteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
