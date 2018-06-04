import { TabProduct } from '../action/types';

const initState = {
    loading: true,
    dataSellingProduct: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case TabProduct.GET_SUCCEEDED_SELLING_PRODUCT:
            return {
                ...state,
                loading: false,
                dataSellingProduct: [...state.dataSellingProduct, ...action.payload]
            };
        case TabProduct.GET_FAILED_SELLING_PRODUCT:
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
