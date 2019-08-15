import { productsReducer } from '../redux/reducers/products.reducer';

export const store = {
    products: productsReducer,
    initialProducts: productsReducer
}