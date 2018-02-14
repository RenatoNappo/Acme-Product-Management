import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(
      [
          {path: 'customersignup', component: CustomerComponent}
      ]
    ),
  ],
  declarations: [
    CustomerComponent
  ]
})
export class CustomerModule { }


