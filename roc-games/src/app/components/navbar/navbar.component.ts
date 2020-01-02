import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  displayMenu = 'none';

  constructor() {}

  ngOnInit() {
  }

  createNavbarDropDownMenu() {
    if (this.displayMenu === "block") {
      this.displayMenu = "none";
    } else {
      this.displayMenu = "block";
    }
  }
  
  // TODO: Need to convert to angular binding format
  resetNavbarMenuOnResize() {
    let menuPanel = document.getElementById("navbarLinks");
    window.onresize = () => {
      if (window.innerWidth >= 768) {
        if (menuPanel.style.display === "none") {
          menuPanel.style.display = "block";
        }
      } else {
        menuPanel.style.display = "none";
      }
    }
  }
}
