import { IProduct } from './../shared/Interfaces/IProduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/Services/product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    showImage: boolean = false;

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
    this .products = this.productservice.getProducts();
    this.filteredProducts = this.products;
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
