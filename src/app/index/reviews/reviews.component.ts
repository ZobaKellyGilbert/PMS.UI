import { Component, OnInit } from '@angular/core';
declare function search(): any;
declare function preloader(): any;

@Component({
  selector: 'pms-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  ngOnInit(): void {
    preloader();
  }

}
