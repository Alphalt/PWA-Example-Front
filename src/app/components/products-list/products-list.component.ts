import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products$: Observable<any> = this.store.select(state => state.products);
  productsArray$: Observable<any>;

  constructor(private store: Store<{ products: Product[] }>) { }

  ngOnInit() {
    this.productsArray$ = this.getLastestValueStore();
  }

  getLastestValueStore(): Observable<any>{
    return this.products$.pipe(
      map(products => _.chunk(products.products, 3))
    );
  }

}
