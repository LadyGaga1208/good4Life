import { carts } from './types';

export const getCart = () => ({
    type: carts.GET_CART
});

export const addToCart = (itemsStore, itemsProduct) => ({
    type: carts.ADD_TO_CART,
    itemsStore,
    itemsProduct
});

