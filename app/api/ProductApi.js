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

export default {
    getFavoriteProduct,
    getNewProduct,
    getPreparingProduct,
    getProductInfo,
    getProductOfStore,
    getSuggestProduct,
    getSellingProduct
};

