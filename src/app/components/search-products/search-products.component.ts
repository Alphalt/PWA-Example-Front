import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { FilterProductsWithValue, FilterProductsWithoutValue } from 'src/app/redux/actions/products.actions';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements AfterViewInit {

  products$: Observable<any> = this.store.select(state => state.products);
  @ViewChild('searhInput') searhInput: ElementRef;

  constructor(private store: Store<{ products: Product[] }>) { }

  ngAfterViewInit() {
    this.filterProducts().subscribe(result => {
      if(result === ''){
        this.store.dispatch(new FilterProductsWithoutValue(result))
      }else {
        this.store.dispatch(new FilterProductsWithValue(result))
      }
    });
    this.products$.subscribe();
  }

  filterProducts(): Observable<any> {
    return fromEvent<any>(this.searhInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged()
      );
  }
}
