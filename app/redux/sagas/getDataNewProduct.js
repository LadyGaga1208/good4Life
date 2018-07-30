// import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import ProductApi from '../../api/ProductApi';

import {
    GET_SUCCEEDED_NEW_PRODUCT,
    GET_FAILED_NEW_PRODUCT,
    GET_REQUEST_NEW_PRODUCT
} from '../action/types';
// import { url } from '../../api/Url';

// function getApi(value) {
//     return axios.get(`${url}/ProductInfo?functionName=GetNewProduct&accountId=1&accountType=1&index=${value}&productType=0`);
// }

function* getDataNewProduct(action) {
    try {
        const response = yield call(ProductApi.getNewProduct, 1, 1, action.value, 0);
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
