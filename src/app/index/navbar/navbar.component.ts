import { Component, OnInit } from '@angular/core';
declare function search(): any;

@Component({
  selector: 'pms-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    search();
  }
  isShowNav = false;
  isWindoSm = false;
  public toggleNav() {
    this.isShowNav = !this.isShowNav;
  }
}


