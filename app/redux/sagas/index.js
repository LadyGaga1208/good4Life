import { fork } from 'redux-saga/effects';

import getDataHoneInfo from './getDataHome';
import getDataListStore from './getListStore';
import getProductSuggest from './getDataProductSuggest';
import getNewProduct from './getDataNewProduct';
import getSellingProduct from './getDataSellingProduct';
import getDataProductInf from './getDataProductInfo';
import getDataSoreInf from './getDataStoreInfo';
import getPrepareProduct from './getDataPrepareProduct';
import getFavoriteProduct from './getDataFavoriteProduct';
import getProductStore from './getDataProductStore';
import getDataStoreFollow from './getDataStoreFollow';
import getDtaStoreSuggest from './getDataStoreSuggest';

export default function* rootSaga() {
    yield fork(getDataHoneInfo);
    yield fork(getDataListStore);
    yield fork(getProductSuggest);
    yield fork(getNewProduct);
    yield fork(getDataProductInf);
    yield fork(getDataSoreInf);
    yield fork(getSellingProduct);
    yield fork(getPrepareProduct);
    yield fork(getFavoriteProduct);
    yield fork(getProductStore);
    yield fork(getDataStoreFollow);
    yield fork(getDtaStoreSuggest);
} 
