// import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import ProductApi from '../../api/ProductApi';

import { TabProduct } from '../action/types';
// import { url } from '../../api/Url';

// function getApi(value) {
//     return axios.get(`${url}/ProductInfo?functionName=GetPreparingProduct&accountId=1&accountType=1&index=${value}&productType=0`);
// }

function* getDataPrepareProduct(action) {
    try {
        const response = yield call(ProductApi.getPreparingProduct, 1, 1, action.value, 0);
        yield put({
            type: TabProduct.GET_SUCCEEDED_PREPARE_SELLING_PRODUCT,
            payload: response.data.productInfoList
        });
    } catch (error) {
        yield put({ type: TabProduct.GET_FAILED_PREPARE_SELLING_PRODUCT });
    }
}

export default function* getPrepareProduct() {
    yield takeEvery(TabProduct.GET_REQUEST_PREPARE_SELLING_PRODUCT, getDataPrepareProduct);
}
