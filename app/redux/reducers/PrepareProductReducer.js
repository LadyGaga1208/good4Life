import { TabProduct } from '../action/types';

const initState = {
    loading: true,
    dataPrepareProduct: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case TabProduct.GET_SUCCEEDED_PREPARE_SELLING_PRODUCT:
            return {
                ...state,
                loading: false,
                dataPrepareProduct: [...state.dataPrepareProduct, ...action.payload]
            };
        case TabProduct.GET_FAILED_PREPARE_SELLING_PRODUCT:
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
