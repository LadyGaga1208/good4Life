// import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import ProductApi from '../../api/ProductApi';

import { TabProduct } from '../action/types';
// import { url } from '../../api/Url';


// function getApi(value) {
//     return axios.get(`${url}/ProductInfo?functionName=GetSellingProduct&accountId=1&accountType=1&index=${value}&productType=0`);
// }

function* getDataSellingProduct(action) {
    try {
        const response = yield call(ProductApi.getSellingProduct, 1, 1, action.value, 0);
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
