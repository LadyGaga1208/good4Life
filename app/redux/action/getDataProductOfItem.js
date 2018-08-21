import { GET_PRODUCT_OF_ITEM } from './types';

export const getProductOfItem = (productItem, index) => ({
    type: GET_PRODUCT_OF_ITEM,
    productItem,
    index
});
