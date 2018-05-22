import { GET_REQUEST_NEW_PRODUCT } from './types';

export const getDataNewProduct = (value) => ({
    type: GET_REQUEST_NEW_PRODUCT,
    value
});
