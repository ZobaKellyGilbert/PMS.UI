import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewPropertiesService } from 'src/app/services/view-properties.service';
import { PropertiesResponse } from 'src/app/data/DTOS/Res/PropertiesResponse';

@Component({
  selector: 'pms-view-properties',
  templateUrl: './view-properties.component.html',
  styleUrls: ['./view-properties.component.css'],
})
export class ViewPropertiesComponent implements OnInit {
  properties!: PropertiesResponse[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private viewPropService: ViewPropertiesService
  ) {}
  ngOnInit(): void {
    this.getProps();
  }

  public getProps() {
    this.viewPropService.getProperties().subscribe({
      next: (res) => {
        console.log(res);
        this.properties = res;
        console.log(this.properties);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public propDetail(id: string){}
}
