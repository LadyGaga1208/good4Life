import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
    GET_REQUEST_PRODUCT_STORE,
    GET_FAILED_PRODUCT_STORE,
    GET_SUCCEEDED_PRODUCT_STORE
} from '../action/types';
import { url } from '../../api/Url';


function getApi(value, storeId) {
    return axios.get(`${url}/ProductInfo?functionName=GetProductOfStore&accountId=1&accountType=1&storeId=${storeId}&type=0&productType=0&index=${value}`);
}

function* getDataProductStore(action) {
    try {
        const response = yield call(getApi, action.value, action.storeId);
        yield put({
            type: GET_SUCCEEDED_PRODUCT_STORE,
            payload: response.data.productInfoList
        });
    } catch (error) {
        yield put({ type: GET_FAILED_PRODUCT_STORE });
    }
}

export default function* getProductStore() {
    yield takeEvery(GET_REQUEST_PRODUCT_STORE, getDataProductStore);
}
