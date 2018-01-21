
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../product.service';
import { IProduct } from '../../../shared/Interfaces/IProduct';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    showImage: boolean = false;
    errorMessage: string;

    // listFilter: string = 'cart';

    _listFilter: string;
    get listFilter(): string{
      return this._listFilter;
    }

    set listFilter(value: string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];

  constructor(private productservice: ProductService) {

  }

  ngOnInit() {
    this.productservice.getProducts()
      .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error =>  this.errorMessage = <any>error);
  }

  toggleImage(): void {
      this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
  }

}
