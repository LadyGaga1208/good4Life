
const initState = {
    loading: true,
    dataHome: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_SUCCEEDED':
            return { ...state, loading: false, dataHome: action.payload };
        case 'GET_FAILED':
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};
