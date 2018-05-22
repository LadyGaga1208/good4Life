
const initState = {
    loading: true,
    dataProductSuggest: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_SUCCEEDED_PRODUCT_SUGGEST':
            return {
                ...state,
                loading: false,
                dataProductSuggest: [...state.dataProductSuggest, ...action.payload]
            };
        case 'GET_FAILED_PRODUCT_SUGGEST':
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
