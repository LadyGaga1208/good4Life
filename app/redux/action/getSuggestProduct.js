import { GET_REQUEST_PRODUCT_SUGGEST } from './types';

export const getDataProductSuggest = (value) => ({
    type: GET_REQUEST_PRODUCT_SUGGEST,
    value
});
