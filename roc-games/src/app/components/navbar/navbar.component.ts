import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  displayMenu = 'none';

  constructor() {
    if (window.innerWidth >= 768) this.displayMenu = "block"; // Displays navbar on page load over 767px screen width.
    this.resetNavbarMenuOnResize();
  }

  ngOnInit() {
  }

  createNavbarDropDownMenu() {
    this.displayMenu = this.displayMenu === "block" ? "none" : "block";
  }
  
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
