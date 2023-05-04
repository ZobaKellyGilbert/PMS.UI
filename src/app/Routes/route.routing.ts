import { Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { IndexComponent } from '../index/index.component';

import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
export const routes: Routes = [
  {path: '', component: IndexComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: 'pageNotFound', component: NotfoundComponent },
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' }
    ];

