import { AsyncStorage } from 'react-native';

const saveCart = async (cart) => {
    await AsyncStorage.setItem('@cart', JSON.stringify(cart));
};

const getCart = async () => {
    const emptyCart = [];
    const value = await AsyncStorage.getItem('@cart');
    const cart = JSON.parse(value);
    return cart || emptyCart;
};
const fetch = async () => getCart();

const addCart = async (itemsStore, itemProduct) => {
    // await AsyncStorage.removeItem('@cart');
    const cart = await fetch();
    console.log(cart);
    const index = cart.findIndex(item => item.itemsStore.store.storeId === itemsStore.store.storeId);
    console.log(index);
    if (index >= 0) {
        // console.log(cart[index].itemsProduct);
        const existsProduct = cart[index].itemsProduct.some(item => item.product.productId === itemProduct.product.productId);
        // console.log(existsProduct);
        if (existsProduct) {
            throw Error('Sản phẩm đã có trong giỏ hàng');
        }
        cart[index].itemsProduct.unshift(itemProduct);
        saveCart(cart);
        return cart;
    }
    const newItem = { itemsStore, itemsProduct: [itemProduct] };
    const newCart = [...cart, newItem];
    saveCart(newCart);
    return newCart;
};

export default {
    fetch,
    addCart
};

