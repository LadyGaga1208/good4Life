import { carts } from './types';

export const getCart = () => ({
    type: carts.GET_CART
});

export const addToCart = (itemsStore, itemsProduct) => ({
    type: carts.ADD_TO_CART,
    itemsStore,
    itemsProduct
});

export const addToCartFromBuyNow = (itemsStore, itemsProduct) => ({
    type: carts.ADD_TO_CART_FROM_BUY_NOW,
    itemsStore,
    itemsProduct
});

export const changeMarkedStore = (storeId) => ({
    type: carts.CHANGE_MARKED_STORE,
    storeId
});

export const changeMarkedProduct = (storeId, productId) => ({
    type: carts.CHANGE_MARKED_PRODUCT,
    storeId,
    productId
});

export const removeProduct = (storeId, productId) => ({
    type: carts.REMOVE_PRODUCT,
    storeId,
    productId
});

export const removeStore = (storeId) => ({
    type: carts.REMOVE_STORE,
    storeId
});

export const increQuantity = (storeId, productId) => ({
    type: carts.INCREMENT_QUANTITY,
    storeId,
    productId,
});

export const decreQuantity = (storeId, productId) => ({
    type: carts.DECREMENT_QUANTITY,
    storeId,
    productId,
});

export const inputQuantity = (storeId, productId, number) => ({
    type: carts.INPUT_QUANTITY,
    storeId,
    productId,
    number
});
