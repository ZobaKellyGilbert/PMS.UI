import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from 'src/app/components/admin/admin-routing.module';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PropertiesComponent } from './properties/properties.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { LeasesComponent } from './leases/leases.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin-view-post/admin-view-post.component';
import { AdminAddPostComponent } from './admin-add-post/admin-add-post.component';

@NgModule({
  declarations: [
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    PropertiesComponent,
    DashboardComponent,
    AdminComponent,
    LeasesComponent,
    TestimonialsComponent,
    AdminPostsComponent,
    AdminViewPostComponent,
    AdminAddPostComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,FormsModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
  