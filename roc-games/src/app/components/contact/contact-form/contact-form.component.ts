import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  // TODO: Bind contact form to component file.
  contactName: string = "";
  contactEmail: string = "";
  contactPhone: string = "";
  contactMessage: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendContactForm = () => {
    let contactData = {
      contactName: this.contactName,
      contactEmail: this.contactEmail,
      contactPhone: this.contactPhone,
      contactMessage: this.contactMessage
    }
    this.http.post()
  }

}
