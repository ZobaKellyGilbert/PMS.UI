import { Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { IndexComponent } from '../index/index.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'pageNotFound', component: NotfoundComponent },
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' },
];
