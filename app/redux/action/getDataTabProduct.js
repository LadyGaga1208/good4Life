import { GET_REQUEST_NEW_PRODUCT, TabProduct } from './types';

export const getDataNewProduct = (value, productType) => ({
    type: GET_REQUEST_NEW_PRODUCT,
    value,
    productType
});

export const getDataSellingProduct = (value, productType) => ({
    type: TabProduct.GET_REQUEST_SELLING_PRODUCT,
    value,
    productType
});

export const getDataPrepareProduct = (value, productType) => ({
    type: TabProduct.GET_REQUEST_PREPARE_SELLING_PRODUCT,
    value,
    productType
});

export const getDataFavoriteProduct = (value, productType) => ({
    type: TabProduct.GET_REQUEST_FAVORITE_PRODUCT,
    value,
    productType
});
