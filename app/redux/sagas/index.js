import { fork } from 'redux-saga/effects';

import getDataHoneInfo from './getDataHome';
import getDataListStore from './getListStore';
import getProductSuggest from './getDataProductSuggest';
import getNewProduct from './getDataNewProduct';
import getDataProductInf from './getDataProductInfo';
import getDataSoreInf from './getDataStoreInfo';

export default function* rootSaga() {
    yield fork(getDataHoneInfo);
    yield fork(getDataListStore);
    yield fork(getProductSuggest);
    yield fork(getNewProduct);
    yield fork(getDataProductInf);
    yield fork(getDataSoreInf);
} 
