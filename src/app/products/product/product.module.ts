
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { ProductRoutingModule } from './../../routing/product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }


