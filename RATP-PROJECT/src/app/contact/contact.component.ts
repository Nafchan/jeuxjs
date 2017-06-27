import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  addEmail(event, formValue){
    event.preventDefault();

    const valueForm: any = {
      nom: formValue.name,
      mailer: formValue.email,
      objetMail: formValue.subject,
      msg: formValue.message
    };

    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';

    console.log(valueForm.nom);
    console.log(valueForm.mail);
    console.log(valueForm.objetMail);
    console.log(valueForm.msg);
  }

}

interface typeForm{
  name: string;
  email: string;
  subject: string;
  message: string;
}
