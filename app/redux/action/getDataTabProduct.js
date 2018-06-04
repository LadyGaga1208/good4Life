import { GET_REQUEST_NEW_PRODUCT, TabProduct } from './types';

export const getDataNewProduct = (value) => ({
    type: GET_REQUEST_NEW_PRODUCT,
    value
});

export const getDataSellingProduct = (value) => ({
    type: TabProduct.GET_REQUEST_SELLING_PRODUCT,
    value
});

export const getDataPrepareProduct = (value) => ({
    type: TabProduct.GET_REQUEST_PREPARE_SELLING_PRODUCT,
    value
});

export const getDataFavoriteProduct = (value) => ({
    type: TabProduct.GET_REQUEST_FAVORITE_PRODUCT,
    value
});
