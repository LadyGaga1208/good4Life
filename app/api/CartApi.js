import { AsyncStorage } from 'react-native';

export const saveCart = async (cart) => {
    await AsyncStorage.setItem('@cart', JSON.stringify(cart));
};

export const getCart = async () => {
    try {
        const value = await AsyncStorage.getItem('@cart');
        if (value !== null) {
            return JSON.parse(value);
        }
        return [];
    } catch (error) {
        // Error retrieving data
        return [];
    }
};

