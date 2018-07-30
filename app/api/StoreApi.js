import ApiService from './ApiService';

const getFollowStore = (accountId, accountType, index) => {
    return ApiService.get(`StoreInfo?functionName=GetFollowStore&accountId=${accountId}&accountType=${accountType}&index=${index}`);
};

const getStoreInfo = (storeId) => {
    return ApiService.get(`StoreInfo?functionName=GetStoreInfo&storeId=${storeId}`);
};

const getSuggestStore = (accountId, accountType, index) => {
    return ApiService.get(`StoreInfo?functionName=GetSuggestStore&accountId=${accountId}&accountType=${accountType}&index=${index}`);
};

const getStoreList = (accountId, accountType, index) => {
    return ApiService.get(`StoreInfo?functionName=GetStoreList&accountId=${accountId}&accountType=${accountType}&index=${index}`);
};

export default {
    getFollowStore,
    getStoreInfo,
    getSuggestStore,
    getStoreList
};

