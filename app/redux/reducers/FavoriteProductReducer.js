import { TabProduct } from '../action/types';

const initState = {
    loading: true,
    dataFavoriteProduct: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case TabProduct.GET_SUCCEEDED_FAVORITE_PRODUCT:
            return {
                ...state,
                loading: false,
                dataFavoriteProduct: [...state.dataFavoriteProduct, ...action.payload]
            };
        case TabProduct.GET_FAILED_FAVORITE_PRODUCT:
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
