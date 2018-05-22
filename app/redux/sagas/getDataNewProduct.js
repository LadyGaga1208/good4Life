import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
    GET_SUCCEEDED_NEW_PRODUCT,
    GET_FAILED_NEW_PRODUCT,
    GET_REQUEST_NEW_PRODUCT
} from '../action/types';

function getApi(value) {
    return axios.get(`http://202.191.56.103:5588/local-server/ProductInfo?functionName=GetNewProduct&accountId=1&accountType=1&index=${value}&productType=0`);
}

function* getDataNewProduct(action) {
    try {
        const response = yield call(getApi, action.value);
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
