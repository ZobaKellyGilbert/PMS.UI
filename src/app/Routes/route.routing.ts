import { Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { IndexComponent } from '../index/index.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { PropertiesComponent } from '../components/properties/properties.component';
import { ViewPropertiesComponent } from '../components/view-properties/view-properties.component';
import { NavbarComponent } from '../index/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { AdminComponent } from '../components/admin/admin.component';
import { BlogComponent } from '../components/admin/blog/blog.component';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';
import { LeasesComponent } from '../components/admin/leases/leases.component';
import { TestimonialsComponent } from '../components/admin//testimonials/testimonials.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [{ path: 'home', component: IndexComponent }],
  },
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'signup',component:SignupComponent},
  {path:'hero',component:HeroComponent},
  {path:'admin',component:AdminComponent},
  {path:'properties',component:PropertiesComponent},
  {path:'properties/:id',component:PropertiesComponent},
  {path:'view-properties',component: ViewPropertiesComponent },
  {path:'blog',component: BlogComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'leases',component:LeasesComponent},
  {path:'testimonials',component:TestimonialsComponent},
    // {
    //   path: 'admin',
    //   loadChildren: () =>
    //     import('../../app/components/admin/admin.module').then((mod) => mod.AdminModule),
    // },
  { path: 'pageNotFound', component: NotfoundComponent },
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' },
];
