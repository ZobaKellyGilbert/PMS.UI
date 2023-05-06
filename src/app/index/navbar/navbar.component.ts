import { Component } from '@angular/core';

@Component({
  selector: 'pms-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isShowNav = false;
  isWindoSm = false;
  public toggleNav() {
    this.isShowNav = !this.isShowNav;
  }
}
