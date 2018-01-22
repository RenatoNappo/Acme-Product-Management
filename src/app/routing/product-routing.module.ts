import { ProductDetailComponent } from './../products/product/product-detail/product-detail.component';
import { ProductGuardService } from './../products/product/product-guard.service';
import { ProductListComponent } from './../products/product/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', canActivate: [ProductGuardService] , component: ProductDetailComponent}
    ]),
  ],
  declarations: []
})
export class ProductRoutingModule { }
