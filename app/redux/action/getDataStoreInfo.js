import { GET_REQUEST_STORE_INFO } from './types';

export const getDataStoreInfo = (storeId) => ({
    type: GET_REQUEST_STORE_INFO,
    storeId
});
