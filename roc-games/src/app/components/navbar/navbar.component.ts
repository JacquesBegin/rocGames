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
    this.displayMenu = this.displayMenu === "block" ? "none" : "block";
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
