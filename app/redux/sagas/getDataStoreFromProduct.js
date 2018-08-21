import { call, put, takeEvery } from 'redux-saga/effects';

import ProductApi from '../../api/ProductApi';
import {
    GET_STORE_FROM_PRODUCT,
    GET_STORE_FROM_PRODUCT_FAILED,
    GET_STORE_FROM_PRODUCT_SUCCEEDED
} from '../action/types';

function* getStoreFromProduct(action) {
    try {
        const response = yield call(ProductApi.getStoreOfProduct, action.storeId);
        yield put({
            type: GET_STORE_FROM_PRODUCT_SUCCEEDED,
            payload: response.data.StoreInfo
        });
    } catch (error) {
        yield put({
            type: GET_STORE_FROM_PRODUCT_FAILED
        });
    }
}

export default function* watchGetStoreFromProduct() {
    yield takeEvery(GET_STORE_FROM_PRODUCT, getStoreFromProduct);
}
