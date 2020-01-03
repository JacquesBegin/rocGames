import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  displayMenu = 'none';

  constructor() {
    this.resetNavbarMenuOnResize();
  }

  ngOnInit() {
  }

  createNavbarDropDownMenu() {
    this.displayMenu = this.displayMenu === "block" ? "none" : "block";
  }
  
  // TODO: Need to convert to angular binding format
  resetNavbarMenuOnResize() {
    window.onresize = () => {
      if (window.innerWidth >= 768) {
        if (this.displayMenu === "none") {
          this.displayMenu = "block";
        }
      } else {
        this.displayMenu = "none";
      }
    }
  }
}
