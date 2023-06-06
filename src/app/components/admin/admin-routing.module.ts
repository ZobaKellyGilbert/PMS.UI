import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { LeasesComponent } from './leases/leases.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'admin',
  children:[
    {path:'properties',component:PropertiesComponent},
    {path:'blog',component:BlogComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'leases',component:LeasesComponent},
    {path:'testimonials',component:TestimonialsComponent},
    

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
