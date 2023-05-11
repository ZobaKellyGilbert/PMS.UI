import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PropertiesResponse } from 'src/app/data/DTOS/Res/PropertiesResponse';
import { ViewPropertiesService } from 'src/app/services/view-properties.service';

@Component({
  selector: 'pms-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  type: string = '';
  id: string = '';
  url: string = '';
  movies: any;
  property!: PropertiesResponse;
  constructor(
    private route: ActivatedRoute,
    private viewPropService: ViewPropertiesService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProperty(this.id);
    console.log(this.id);
  }
  getProperty(id: string) {
    this.viewPropService
      .getProperty(id)
      .subscribe({ next: (response) => {
        this.property = response;
      }, error: (err) => {console.log(err)} });
  }
}
