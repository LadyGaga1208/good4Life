import * as types from './types';

export const register = (params, onComplete) => ({
    type: types.USER_REGISTER,
    params,
    onComplete
});
