
const initState = {
    loading: true,
    dataNewProduct: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_SUCCEEDED_NEW_PRODUCT':
            return {
                ...state,
                loading: false,
                dataNewProduct: [...state.dataNewProduct, ...action.payload].filter((element, index, arr) =>
                    index === arr.findIndex((t) => (
                        t.productId === element.productId
                    ))
                )
            };
        case 'GET_FAILED_NEW_PRODUCT':
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
