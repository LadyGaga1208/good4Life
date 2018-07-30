import { call, put, takeEvery } from 'redux-saga/effects';

import ProductApi from '../../api/ProductApi';
import { TabProduct } from '../action/types';
// import { url } from '../../api/Url';

// function getApi(value) {
//     return axios.get(`${url}/ProductInfo?functionName=GetFavoriteProduct&accountId=1&accountType=1&index=${value}&productType=0`);
// }

function* getDataFavoriteProduct(action) {
    try {
        const response = yield call(ProductApi.getFavoriteProduct, 1, 1, action.value, 0);
        yield put({
            type: TabProduct.GET_SUCCEEDED_FAVORITE_PRODUCT,
            payload: response.data.productInfoList
        });
    } catch (error) {
        yield put({ type: TabProduct.GET_FAILED_FAVORITE_PRODUCT });
    }
}

export default function* getFavoriteProduct() {
    yield takeEvery(TabProduct.GET_REQUEST_FAVORITE_PRODUCT, getDataFavoriteProduct);
}
