import { combineReducers } from 'redux';

import { navReducer } from './NavReducer';
import homeReducer from './HomeReducer';
import listStore from './ListStoreReducer';
import dataProductSuggest from './ProductSuggestReducer';
import dataNewProduct from './NewProductReducer';
import dataProductInfo from './ProductInfoReducer';
import dataStoreInfo from './StoreInfoReducer';
import modalBuy from './ModalBuyReducer';
import dataSellingProduct from './SellingProductReducer';
import dataFavoriteProduct from './FavoriteProductReducer';
import dataPrepareProduct from './PrepareProductReducer';
import dataProductStore from './ProductStoreReducer';
import dataStoreFollow from './StoreFollowReducer';
import dataStoreSuggest from './StoreSuggest';
import cartReducer from './CartReducer';
import dataStoreFromProduct from './StoreFromProduct';
import authReducer from './authReducer';

export default combineReducers({
    nav: navReducer,
    homeReducer,
    listStore,
    dataProductSuggest,
    dataNewProduct,
    dataProductInfo,
    dataStoreInfo,
    modalBuy,
    dataSellingProduct,
    dataFavoriteProduct,
    dataPrepareProduct,
    dataProductStore,
    dataStoreSuggest,
    dataStoreFollow,
    cartReducer,
    dataStoreFromProduct,
    authReducer
});
