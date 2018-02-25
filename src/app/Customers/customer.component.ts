import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn} from '@angular/forms';
import { Customer } from './customer';
import { AbstractControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

function ratingRange(minValue: number, maxValue: number): ValidatorFn {
  return (c: AbstractControl ): {[key: string]: boolean } | null => {
    if ( c.value !== undefined && ( isNaN(c.value) || c.value < 1 || c.value > 5 ))  {
      return {'range': true};
    }
    return null;
  };
}


function emailComparison(c: AbstractControl): {[key: string]: boolean} | null {
  const email = c.get('email');
  const confirmEmail = c.get('confirmEmail');
  if (email.pristine || confirmEmail.pristine){
    return null;
  }
  if (email.value !== confirmEmail.value){
    return { 'emailMatch': true };
  }
  return null;
}


@Component({
  selector: 'pm-customer-signup',
  templateUrl: './customer.component.html'
})

export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();
  customerForm: FormGroup;

  emailMessage: string;
  private validationMessages = {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', Validators.required],
        confirmEmail: ['', Validators.required]
      }, {validator: emailComparison}),
      phone: '',
      notification: 'email',
      rating: ['', ratingRange(1, 5)],
      sendCatalog: true
    });

    this.customerForm.get('notification').valueChanges.subscribe(value => this.setNotification(value));

    this.email.valueChanges.debounceTime(1000).subscribe(value => this.setEmailMessage(this.email));
  }

  get firstName(){
    return this.customerForm.get('firstName');
  }

  get lastName(){
    return this.customerForm.get('lastName');
  }

  get email(){
    return this.customerForm.get('emailGroup.email');
  }

  get confirmEmail(){
    return this.customerForm.get('emailGroup.confirmEmail');
  }

  get phone(){
    return this.customerForm.get('phone');
  }

  get rating(){
    return this.customerForm.get('rating');
  }

  get sendCatalog(){
    return this.customerForm.get('sendCatalog');
  }

  setNotification(notifyVia: string): void {
    if (notifyVia === 'text' ) {
      this.phone.setValidators(Validators.required);
    } else {
      this.phone.clearValidators();
    }
    this.phone.updateValueAndValidity();
  }

  setEmailMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
    }
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}
