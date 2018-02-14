import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Customer } from './customer';


@Component({
  selector: 'pm-customer-signup',
  templateUrl: './customer.component.html'
})

export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      sendCatalog: true
    });
  }

  get firstName(){
    return this.customerForm.get('firstName');
  }

  get lastName(){
    return this.customerForm.get('lastName');
  }

  get email(){
    return this.customerForm.get('email');
  }

  get sendCatalog(){
    return this.customerForm.get('sendCatalog');
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}
