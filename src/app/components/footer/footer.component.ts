import { Component, OnInit } from '@angular/core';
declare function footer(): any;
// declare function scroll(): any;
// declare function preloader(): any;


@Component({
  selector: 'pms-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    
    footer();
    // scroll();
    // preloader();
      
    }
  }
