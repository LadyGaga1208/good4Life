import { call, put, takeEvery } from 'redux-saga/effects';

import ProductApi from '../../api/ProductApi';
import { TabProduct } from '../action/types';

function* getDataSellingProduct(action) {
    try {
        const response = yield call(ProductApi.getSellingProduct, 1, 1, action.value, action.productType);
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
