import { call, put, takeEvery } from 'redux-saga/effects';

import ProductApi from '../../api/ProductApi';

import {
    GET_SUCCEEDED_NEW_PRODUCT,
    GET_FAILED_NEW_PRODUCT,
    GET_REQUEST_NEW_PRODUCT
} from '../action/types';

function* getDataNewProduct(action) {
    try {
        const response = yield call(ProductApi.getNewProduct, 1, 1, action.value, action.productType);
        yield put({
            type: GET_SUCCEEDED_NEW_PRODUCT,
            payload: response.data.productInfoList
        });
    } catch (error) {
        yield put({ type: GET_FAILED_NEW_PRODUCT });
    }
}

export default function* getNewProduct() {
    yield takeEvery(GET_REQUEST_NEW_PRODUCT, getDataNewProduct);
}
