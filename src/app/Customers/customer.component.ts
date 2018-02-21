import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn} from '@angular/forms';
import { Customer } from './customer';
import { AbstractControl } from '@angular/forms';


function ratingRange(minValue: number, maxValue: number): ValidatorFn {
  return (c: AbstractControl ): {[key: string]: boolean } | null => {
    if ( c.value !== undefined && ( isNaN(c.value) || c.value < minValue || c.value > maxValue ))  {
      return {'range': true};
    }
    return null;
  }
}


function emailComparison(c: AbstractControl){
  let email = c.get('email');
  let confirmEmail = c.get('confirmEmail');
  if(email.pristine || confirmEmail.pristine){
    return null;
  }
  if(email.value !== confirmEmail.value) {
    return {'emailMatch': true};
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
      emailGroup: this.fb.group({
        email: ['', Validators.required],
        confirmEmail: ['', Validators.required],
      },{validator: emailComparison}),
      phone: '',
      notification: 'email',
      rating: ['', ratingRange(1,5)],
      sendCatalog: true,
      catalogAddress: this.fb.group({
        streeAddress1: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipcode: ''
      })
    });
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

  get streeAddress1(){
    return this.customerForm.get('catalogAddress.streeAddress1');
  }

  get streeAddress2(){
    return this.customerForm.get('catalogAddress.streeAddress2');
  }

  get city(){
    return this.customerForm.get('catalogAddress.city');
  }

  get state(){
    return this.customerForm.get('catalogAddress.state');
  }

  get zipcode(){
    return this.customerForm.get('catalogAddress.zipcode');
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
