import { GET_REQUEST_PRODUCT_INFO } from './types';

export const getDataProductInfo = (productID) => ({
    type: GET_REQUEST_PRODUCT_INFO,
    productID
});
