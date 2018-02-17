import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Customer } from './customer';
import { AbstractControl } from '@angular/forms';


function ratingRange(c: AbstractControl ): {[key: string]: boolean } | null {
  if ( c.value != undefined && ( isNaN(c.value) || c.value < 1 || c.value > 5 ))
  {
    return {'range': true};
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
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', Validators.required],
      phone: '',
      notification: 'email',
      rating: ['', ratingRange],
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

  get phone(){
    return this.customerForm.get('phone');
  }

  get rating(){
    return this.customerForm.get('rating');
  }

  get sendCatalog(){
    return this.customerForm.get('sendCatalog');
  }


  setNotfication(notifyVia: string): void {
    if (notifyVia === 'phone' ) {
      this.phone.setValidators(Validators.required);
    } else {
      this.phone.clearAsyncValidators();
    }
    this.phone.markAsUntouched();
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}
