import { Product } from 'src/app/models/product.model';
import { All, ActionTypesProducts } from '../actions/products.actions';

export interface ProductsListState {
    products: Product[];
    initialProducts: Product[];
}

export const initialState: ProductsListState = {
    products: [],
    initialProducts: []
};

export function productsReducer(state = initialState, action: All) {
    switch (action.type) {
        case ActionTypesProducts.LoadProductsSuccess:
            return {
                ...state,
                products: action.payload,
                initialProducts: action.payload
            }
        case ActionTypesProducts.FilterProductsSuccess:
            return {
                ...state,
                products: action.payload,
                initialProducts: state.products
            }
        default:
            return state;
    }
}