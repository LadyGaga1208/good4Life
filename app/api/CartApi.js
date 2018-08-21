import { AsyncStorage } from 'react-native';

const saveCart = async (cart) => {
    await AsyncStorage.setItem('@cart', JSON.stringify(cart));
};

const getCart = async () => {
    // await AsyncStorage.removeItem('@cart');

    const emptyCart = [];
    const value = await AsyncStorage.getItem('@cart');
    const cart = JSON.parse(value);
    return cart || emptyCart;
};
const fetch = async () => getCart();

const addCart = async (itemsStore, itemProduct) => {
    // await AsyncStorage.removeItem('@cart');
    const cart = await fetch();
    // console.log(cart);
    const index = cart.findIndex(item => item.itemsStore.store.storeId === itemsStore.store.storeId);
    // console.log(index);
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

const changeMarkedStore = async (storeId) => {
    const cart = await fetch();
    const index = cart.findIndex(item => item.itemsStore.store.storeId === storeId);
    cart[index].itemsStore.marked = !cart[index].itemsStore.marked;
    for (let i = 0; i < cart[index].itemsProduct.length; i++) {
        cart[index].itemsProduct[i].marked = cart[index].itemsStore.marked;
    }
    saveCart(cart);
    return cart;
};

const changeMarkedProduct = async (storeId, productId) => {
    const cart = await fetch();
    const indexStore = cart.findIndex(item => item.itemsStore.store.storeId === storeId);
    const indexProduct = cart[indexStore].itemsProduct.findIndex(item => item.product.productId === productId);
    cart[indexStore].itemsProduct[indexProduct].marked = !cart[indexStore].itemsProduct[indexProduct].marked;
    cart[indexStore].itemsStore.marked = cart[indexStore].itemsProduct.every(item => item.marked === true);
    saveCart(cart);
    return cart;
};

const removeProduct = async (storeId, productId) => {
    const cart = await fetch();
    const indexStore = cart.findIndex(item => item.itemsStore.store.storeId === storeId);
    const newItemsProduct = cart[indexStore].itemsProduct.filter(e => e.product.productId !== productId);
    console.log(newItemsProduct);
    const checkEmpty = newItemsProduct.findIndex(e => e.quantity >= 1);
    console.log(checkEmpty);
    if (checkEmpty === -1) {
        const newCart = cart.filter(e => e.itemsStore.store.storeId !== storeId);
        saveCart(newCart);
        return newCart;
    }
    cart[indexStore].itemsProduct = newItemsProduct;
    cart[indexStore].itemsStore.marked = cart[indexStore].itemsProduct.every(item => item.marked === true);
    saveCart(cart);
    return cart;
};

const removeStore = async (storeId) => {
    const cart = await fetch();
    const newCart = cart.filter(e => e.itemsStore.store.storeId !== storeId);
    saveCart(newCart);
    return newCart;
};

const increQuantity = async (storeId, productId) => {
    const cart = await fetch();
    const indexStore = cart.findIndex(item => item.itemsStore.store.storeId === storeId);
    const newItemsProduct = cart[indexStore].itemsProduct.map(e => {
        if (e.product.productId === productId) {
            if (e.quantity >= e.product.total) {
                throw Error(`Số lượng sản phẩm giới hạn ${e.product.total}${e.product.unit}`);
            }
            return { product: e.product, quantity: e.quantity + 1, marked: e.marked };
        }
        return e;
    });
    cart[indexStore].itemsProduct = newItemsProduct;
    saveCart(cart);
    return cart;
};

const decreQuantity = async (storeId, productId) => {
    const cart = await fetch();
    const indexStore = cart.findIndex(item => item.itemsStore.store.storeId === storeId);
    const newItemsProduct = cart[indexStore].itemsProduct.map(e => {
        if (e.product.productId === productId) {
            if (e.quantity === 1) {
                throw Error('haha');
            }
            return { product: e.product, quantity: e.quantity - 1, marked: e.marked };
        }
        return e;
    });
    cart[indexStore].itemsProduct = newItemsProduct;
    saveCart(cart);
    return cart;
};

const inputQuantity = async (storeId, productId, number) => {
    const cart = await fetch();
    const indexStore = cart.findIndex(item => item.itemsStore.store.storeId === storeId);
    const newItemsProduct = cart[indexStore].itemsProduct.map(e => {
        if (e.product.productId === productId) {
            if (number >= e.product.total) {
                throw Error(`Số lượng sản phẩm giới hạn ${e.product.total}${e.product.unit}`);
            }
            return { product: e.product, quantity: number, marked: e.marked };
        }
        return e;
    });
    cart[indexStore].itemsProduct = newItemsProduct;
    saveCart(cart);
    return cart;
};

export default {
    fetch,
    addCart,
    changeMarkedStore,
    changeMarkedProduct,
    removeProduct,
    removeStore,
    increQuantity,
    decreQuantity,
    inputQuantity
};

