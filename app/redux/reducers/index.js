import { combineReducers } from 'redux';

import { navReducer } from './NavReducer';
import homeReducer from './HomeReducer';
import listStore from './ListStoreReducer';
import dataProductSuggest from './ProductSuggestReducer';
import dataNewProduct from './NewProductReducer';
import dataProductInfo from './ProductInfoReducer';
import dataStoreInfo from './StoreInfoReducer';

export default combineReducers({
    nav: navReducer,
    homeReducer,
    listStore,
    dataProductSuggest,
    dataNewProduct,
    dataProductInfo,
    dataStoreInfo
});
