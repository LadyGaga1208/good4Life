import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { TabProduct } from '../action/types';

function getApi(value) {
    return axios.get(`http://202.191.56.103:5588/local-server/ProductInfo?functionName=GetSellingProduct&accountId=1&accountType=1&index=${value}&productType=0`);
}

function* getDataSellingProduct(action) {
    try {
        const response = yield call(getApi, action.value);
        yield put({
            type: TabProduct.GET_SUCCEEDED_SELLING_PRODUCT,
            payload: response.data.productInfoList
        });
    } catch (error) {
        yield put({ type: TabProduct.GET_FAILED_SELLING_PRODUCT });
    }
}

export default function* getSellingProduct() {
    yield takeEvery(TabProduct.GET_REQUEST_SELLING_PRODUCT, getDataSellingProduct);
}
