import { call, put, takeEvery } from 'redux-saga/effects';

import ProductApi from '../../api/ProductApi';
import { TabProduct } from '../action/types';

function* getDataPrepareProduct(action) {
    try {
        const response = yield call(ProductApi.getPreparingProduct, 1, 1, action.value, action.productType);
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
