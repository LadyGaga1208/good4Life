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
import cartSaga from './cart';
import watchGetStoreFromProduct from './getDataStoreFromProduct';
import watchGetDataProductOfItem from './getDataProductOfItem';

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
    yield fork(cartSaga.watchAddToCart);
    yield fork(cartSaga.watchGetCart);
    yield fork(cartSaga.watchChangeMarkedStore);
    yield fork(cartSaga.watchChangeMarkedProduct);
    yield fork(cartSaga.watchRemoveProduct);
    yield fork(cartSaga.watchRemoveStore);
    yield fork(cartSaga.watchIncreQuantity);
    yield fork(cartSaga.watchDecreQuantity);
    yield fork(cartSaga.watchInputQuantity);
    yield fork(cartSaga.watchAddToCartFromBuyNow);
    yield fork(watchGetStoreFromProduct);
    yield fork(watchGetDataProductOfItem);
} 
