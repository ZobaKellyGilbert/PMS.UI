import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './route.routing';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteModule {}
