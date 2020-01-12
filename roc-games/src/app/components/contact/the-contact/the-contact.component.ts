import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-contact',
  templateUrl: './the-contact.component.html',
  styleUrls: ['./the-contact.component.scss']
})
export class TheContactComponent implements OnInit {

  contactName: string = "";
  contactEmail: string = "";
  

  constructor() { }

  ngOnInit() {
  }

}
