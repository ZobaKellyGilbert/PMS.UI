import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { IndexComponent } from './index/index.component';
import { RouteModule } from './Routes/route.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NotfoundComponent,
    IndexComponent,
  ],
  imports: [BrowserModule, RouteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
