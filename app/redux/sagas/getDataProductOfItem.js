import { call, put, takeEvery } from 'redux-saga/effects';

import {
    GET_PRODUCT_OF_ITEM,
    GET_PRODUCT_OF_ITEM_FAILED,
    GET_PRODUCT_OF_ITEM_SUCCEEDED
} from '../action/types';
import ProductApi from '../../api/ProductApi';

function* getDataProductItem(action) {
    try {
        const response = call(ProductApi.getProductOfItem, 1, 1, action.index, action.productItem, 0);
        yield put({
            type: GET_PRODUCT_OF_ITEM_SUCCEEDED,
            payload: response
        });
    } catch (error) {
        yield put({
            type: GET_PRODUCT_OF_ITEM_FAILED,
        });
    }
}

export default function* watchGetDataProductItem() {
    yield takeEvery(GET_PRODUCT_OF_ITEM, getDataProductItem);
}
