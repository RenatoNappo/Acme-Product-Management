import { IProduct } from './../shared/Interfaces/IProduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../shared/Services/product.service';


@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Current Product';
  productname: string;
  products: IProduct[];
  product: IProduct;
  errorMessage: string;

  constructor(
    private _route: ActivatedRoute,
    private productservice: ProductService,
    private _router: Router) {

  }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.productname = this._route.snapshot.paramMap.get('productname');

    this.productservice.getProducts()
    .subscribe(products => {
          this.products = products;
          this.product = this.products.find(x => x.productId === id);
        },
        error =>  this.errorMessage = <any>error);
  }

onBack(): void{
  this._router.navigate(['/products']);
}
}

/*
In the use of the find fnction for the IProducts[ ]
Consider the lambda expression: x => x.productId === id
Think about it as follows:

For each x in the products array find thex whose productId
property is equal to the idobtained from the route snapshot
*/
