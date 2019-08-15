import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export enum ActionTypesProducts {
    LoadProducts = '[Products-List Component] LoadProducts',
    LoadProductsSuccess = '[Products-List Component] LoadProductsSuccess',
    FilterProductsWithValue = '[Search-Products Component] FilterProductsWithValue',
    FilterProductsWithoutValue = '[Search-Products Component] FilterProductsWithoutValue',
    FilterProductsSuccess = '[Search-Products Component] FilterProductsSuccess',
}

export class LoadProducts implements Action {
    readonly type = ActionTypesProducts.LoadProducts;
}

export class LoadProductsSuccess implements Action {
    readonly type = ActionTypesProducts.LoadProductsSuccess;

    constructor(public payload: Product[]) {
        
    }
}

export class FilterProductsWithValue implements Action {
    readonly type = ActionTypesProducts.FilterProductsWithValue;

    constructor(public payload: string) {

    }
}

export class FilterProductsWithoutValue implements Action {
    readonly type = ActionTypesProducts.FilterProductsWithoutValue;

    constructor(public payload: string) {

    }
}

export class FilterProductsSuccess implements Action {
    readonly type = ActionTypesProducts.FilterProductsSuccess;

    constructor(public payload: Product[]) {

    }
}

export type All = 
| LoadProducts
| LoadProductsSuccess
| FilterProductsWithValue
| FilterProductsWithoutValue
| FilterProductsSuccess;

