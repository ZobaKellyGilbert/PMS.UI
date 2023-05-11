import { Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { IndexComponent } from '../index/index.component';

import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { PropertiesComponent } from '../components/properties/properties.component';
import { ViewPropertiesComponent } from '../components/view-properties/view-properties.component';
import { NavbarComponent } from '../index/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
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
  {path:'dashboard',component:DashboardComponent},
  {path:'properties',component:PropertiesComponent},
  {path:'properties/:id',component:PropertiesComponent},
  {path:'view-properties',component: ViewPropertiesComponent },
  { path: 'pageNotFound', component: NotfoundComponent },
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' },
];
