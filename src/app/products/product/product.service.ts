
import { Injectable} from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IProduct } from '../../shared/Interfaces/IProduct';


@Injectable()
export class ProductService{

  productURL: string = './api/products/products.json';

  constructor(private _http: HttpClient){

  }

  getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this.productURL)
        .do(data => console.log('Data: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}

