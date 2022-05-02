import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);

  constructor() {}
  ngOnInit(): void {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter a name';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }
  onSubmit() {
    return alert('Feature Coming Soon!');
  }
}
