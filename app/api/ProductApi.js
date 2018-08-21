import ApiService from './ApiService';

const getFavoriteProduct = (accountId, accountType, index, productType) => {
    return ApiService.get(`ProductInfo?functionName=GetFavoriteProduct&accountId=${accountId}&accountType=${accountType}&index=${index}&productType=${productType}`);
};

const getNewProduct = (accountId, accountType, index, productType) => {
    return ApiService.get(`ProductInfo?functionName=GetNewProduct&accountId=${accountId}&accountType=${accountType}&index=${index}&productType=${productType}`);
};

const getPreparingProduct = (accountId, accountType, index, productType) => {
    return ApiService.get(`ProductInfo?functionName=GetPreparingProduct&accountId=${accountId}&accountType=${accountType}&index=${index}&productType=${productType}`);
};

const getProductInfo = (accountId, accountType, productId) => {
    return ApiService.get(`ProductInfo?functionName=GetProductInfo&accountId=${accountId}&accountType=${accountType}&productId=${productId}`);
};

const getProductOfStore = (accountId, accountType, storeId, type, productType, index) => {
    return ApiService.get(`ProductInfo?functionName=GetProductOfStore&accountId=${accountId}&accountType=${accountType}&storeId=${storeId}&type=${type}&productType=${productType}&index=${index}`);
};

const getSuggestProduct = (accountId, accountType, index) => {
    return ApiService.get(`ProductInfo?functionName=GetSuggestProduct&accountId=${accountId}&accountType=${accountType}&index=${index}`);
};

const getSellingProduct = (accountId, accountType, index, productType) => {
    return ApiService.get(`ProductInfo?functionName=GetSellingProduct&accountId=${accountId}&accountType=${accountType}&index=${index}&productType=${productType}`);
};

const getStoreOfProduct = (storeId) => {
    return ApiService.get(`ProductInfo?functionName=GetStoreOfProduct&storeId=${storeId}`);
};

const getProductOfItem = (accountId, accountType, index, productItem, type) => {
    return ApiService.get(`ProductInfo?functionName=GetProductOfItem&accountId=${accountId}&accountType=${accountType}&index=${index}&productItem=${productItem}&type=${type}`);
};

export default {
    getFavoriteProduct,
    getNewProduct,
    getPreparingProduct,
    getProductInfo,
    getProductOfStore,
    getSuggestProduct,
    getSellingProduct,
    getStoreOfProduct,
    getProductOfItem
};

