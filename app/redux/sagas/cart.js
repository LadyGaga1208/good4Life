import { call, put, takeLatest } from 'redux-saga/effects';
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

function* addToCartFromBuyNow(action) {
    try {
        const response = yield call(CartApi.addCart, action.itemsStore, action.itemsProduct);
        yield put({
            type: carts.ADD_TO_CART_FROM_BUY_NOW_SUCCEEDED,
            cart: response
        });
        yield put({
            type: 'Navigation/NAVIGATE',
            routeName: 'StackCart'
        });
    } catch (error) {
        yield put({
            type: carts.ADD_TO_CART_FROM_BUY_NOW_FAILED,
            error: error.message
        });
    }
}

function* changeMarkStore(action) {
    try {
        const response = yield call(CartApi.changeMarkedStore, action.storeId);
        yield put({
            type: carts.CHANGE_MARKED_STORE_SUCCEEDED,
            cart: response
        });
    } catch (error) {
        yield put({
            type: carts.CHANGE_MARKED_STORE_FAILED,
            error: error.message
        });
    }
}

function* changeMarkedProduct(action) {
    try {
        const response = yield call(CartApi.changeMarkedProduct, action.storeId, action.productId);
        yield put({
            type: carts.CHANGE_MARKED_PRODUCT_SUCCEEDED,
            cart: response
        });
    } catch (error) {
        yield put({
            type: carts.CHANGE_MARKED_PRODUCT_SUCCEEDED,
            error: error.message
        });
    }
}

function* removeProduct(action) {
    try {
        const response = yield call(CartApi.removeProduct, action.storeId, action.productId);
        yield put({
            type: carts.REMOVE_PRODUCT_SUCCEEDED,
            cart: response
        });
    } catch (error) {
        yield put({
            type: carts.REMOVE_PRODUCT_FAILED,
            error: error.message
        });
    }
}

function* removeStore(action) {
    try {
        const response = yield call(CartApi.removeStore, action.storeId);
        yield put({
            type: carts.REMOVE_STORE_SUCCEEDED,
            cart: response
        });
    } catch (error) {
        yield put({
            type: carts.REMOVE_STORE_FAILED,
            error: error.message
        });
    }
}

function* increQuantity(action) {
    try {
        const response = yield call(CartApi.increQuantity, action.storeId, action.productId);
        yield put({
            type: carts.INCREMENT_QUANTITY_SUCCEEDED,
            cart: response
        });
    } catch (error) {
        yield put({
            type: carts.INCREMENT_QUANTITY_FAILED,
            error: error.message
        });
    }
}

function* decreQuantity(action) {
    try {
        const response = yield call(CartApi.decreQuantity, action.storeId, action.productId);
        yield put({
            type: carts.DECREMENT_QUANTITY_SUCCEEDED,
            cart: response
        });
    } catch (error) {
        yield put({
            type: carts.DECREMENT_QUANTITY_FAILED,
            error: error.message
        });
    }
}

function* inputQuantity(action) {
    try {
        const response = yield call(CartApi.inputQuantity, action.storeId, action.productId, action.number);
        yield put({
            type: carts.INPUT_QUANTITY_SUCCEEDED,
            cart: response
        });
    } catch (error) {
        yield put({
            type: carts.INPUT_QUANTITY_FAILED,
            error: error.message
        });
    }
}


function* watchGetCart() {
    yield takeLatest(carts.GET_CART, getCart);
}

function* watchChangeMarkedStore() {
    yield takeLatest(carts.CHANGE_MARKED_STORE, changeMarkStore);
}

function* watchChangeMarkedProduct() {
    yield takeLatest(carts.CHANGE_MARKED_PRODUCT, changeMarkedProduct);
}

function* watchAddToCart() {
    yield takeLatest(carts.ADD_TO_CART, addToCart);
}

function* watchAddToCartFromBuyNow() {
    yield takeLatest(carts.ADD_TO_CART_FROM_BUY_NOW, addToCartFromBuyNow);
}

function* watchRemoveProduct() {
    yield takeLatest(carts.REMOVE_PRODUCT, removeProduct);
}

function* watchIncreQuantity() {
    yield takeLatest(carts.INCREMENT_QUANTITY, increQuantity);
}

function* watchDecreQuantity() {
    yield takeLatest(carts.DECREMENT_QUANTITY, decreQuantity);
}

function* watchInputQuantity() {
    yield takeLatest(carts.INPUT_QUANTITY, inputQuantity);
}

function* watchRemoveStore() {
    yield takeLatest(carts.REMOVE_STORE, removeStore);
}

export default {
    watchGetCart,
    watchAddToCart,
    watchChangeMarkedStore,
    watchChangeMarkedProduct,
    watchRemoveProduct,
    watchRemoveStore,
    watchIncreQuantity,
    watchDecreQuantity,
    watchInputQuantity,
    watchAddToCartFromBuyNow
};

