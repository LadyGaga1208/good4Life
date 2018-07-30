import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { carts } from '../action/types';
import CartApi from '../../api/CartApi';

function* getCart() {
    try {
        const response = yield call(CartApi.fetch);
        yield put({
            type: carts.GET_CART_SUCCEEDED,
            cart: response
        });
    } catch (error) {
        yield put({
            type: carts.GET_CART_FAILED,
            error: error.message
        });
    }
}

function* addToCart(action) {
    try {
        console.log(action);
        const response = yield call(CartApi.addCart, action.itemsStore, action.itemsProduct);
        yield put({
            type: carts.ADD_TO_CART_SUCCEEDED,
            cart: response
        });
    } catch (error) {
        yield put({
            type: carts.ADD_TO_CART_FAILED,
            error: error.message
        });
    }
}

function* watchGetCart() {
    yield takeLatest(carts.GET_CART, getCart);
}

function* watchAddToCart() {
    console.log('hihi');
    yield takeLatest(carts.ADD_TO_CART, addToCart);
}

export default {
    watchGetCart,
    watchAddToCart
};

