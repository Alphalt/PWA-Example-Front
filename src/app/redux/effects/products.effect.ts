import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, pipe } from 'rxjs';
import { map, mergeMap, catchError, startWith, switchMap, withLatestFrom } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { ActionTypesProducts, LoadProducts, LoadProductsSuccess, FilterProductsSuccess } from '../actions/products.actions';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

@Injectable()
export class ProductsEffects {

    constructor(
        private actions$: Actions,
        private moviesService: ProductsService,
        private store: Store<any>
    ) { }

    @Effect()
    loadProducts$ = this.actions$
        .pipe(
            ofType(ActionTypesProducts.LoadProducts),
            startWith(new LoadProducts().type),
            switchMap(() => this.moviesService.getProductList()
                .pipe(
                    map(products => new LoadProductsSuccess(products)),
                    catchError(() => EMPTY)
                ))
        );


    @Effect()
    filterProductsWithValue = this.actions$
        .pipe(
            ofType(ActionTypesProducts.FilterProductsWithValue),
            withLatestFrom(this.store.select(state => state.products)),
            map((payload: any) => payload[1].products.filter(product => product.Name.includes(payload[0].payload))),
            map(result => new FilterProductsSuccess(result)),
            catchError(() => EMPTY)
        )

    @Effect()
    FilterProductsWithoutValue = this.actions$
        .pipe(
            ofType(ActionTypesProducts.FilterProductsWithoutValue),
            withLatestFrom(this.store.select(state => state.initialProducts)),
            map((payload: any) => new FilterProductsSuccess(payload[1].initialProducts)),
            catchError(() => EMPTY)
        )
}