import { TabStore } from './types';

export const getDataStoreFollow = (value) => ({
    type: TabStore.GET_REQUEST_STORE_FOLLOW,
    value
});

export const getDataStoreSuggest = (value) => ({
    type: TabStore.GET_REQUEST_STORE_SUGGEST,
    value
});
