import Root from '../../navigations/Root';

export const navReducer = (state, action) => {
    const nextState = Root.router.getStateForAction(action, state);
    return nextState || state;
};
