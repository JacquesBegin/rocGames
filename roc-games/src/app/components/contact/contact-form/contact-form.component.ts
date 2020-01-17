import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  // TODO: Bind contact form to component file.
  contactName: string = "";
  contactEmail: string = "";

  constructor() { }

  ngOnInit() {
  }

}
