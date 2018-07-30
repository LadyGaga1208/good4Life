// import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import ProductApi from '../../api/ProductApi';

import {
    GET_SUCCEEDED_PRODUCT_SUGGEST,
    GET_FAILED_PRODUCT_SUGGEST,
    GET_REQUEST_PRODUCT_SUGGEST
} from '../action/types';
// import { url } from '../../api/Url';

// function getApi(value) {
//     return axios.get(`${url}/ProductInfo?functionName=GetSuggestProduct&accountId=1&accountType=1&index=${value}`);
// }

function* getDataProductSuggest(action) {
    try {
        const response = yield call(ProductApi.getSuggestProduct, 1, 1, action.value);
        yield put({
            type: GET_SUCCEEDED_PRODUCT_SUGGEST,
            payload: response.data.productInfoList
        });
    } catch (error) {
        yield put({ type: GET_FAILED_PRODUCT_SUGGEST });
    }
}

export default function* getProductSuggest() {
    yield takeEvery(GET_REQUEST_PRODUCT_SUGGEST, getDataProductSuggest);
}
