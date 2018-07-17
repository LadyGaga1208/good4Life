import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
    GET_FAILED_PRODUCT_INFO,
    GET_SUCCEEDED_PRODUCT_INFO,
    GET_REQUEST_PRODUCT_INFO
} from '../action/types';
import { url } from '../../api/Url';

function getApi(productId) {
    return axios.get(`${url}/ProductInfo?functionName=GetProductInfo&accountId=1&accountType=1&productId=${productId}`);
}

function* getDataProductInfo(action) {
    try {
        const response = yield call(getApi, action.productID);
        yield put({
            type: GET_SUCCEEDED_PRODUCT_INFO,
            payload: response.data
        });
    } catch (error) {
        yield put({ type: GET_FAILED_PRODUCT_INFO });
    }
}

export default function* getDataProductInf() {
    yield takeEvery(GET_REQUEST_PRODUCT_INFO, getDataProductInfo);
}
