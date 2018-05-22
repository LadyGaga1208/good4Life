import { GET_REQUEST_STORE } from './types';

export const getListStore = (value) => ({
    type: GET_REQUEST_STORE,
    value
});
