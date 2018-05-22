import { createStore, applyMiddleware } from 'redux';
import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener
} from 'react-navigation-redux-helpers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';


import reducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const navMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);
export const addListener = createReduxBoundAddListener('root');

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, navMiddleware, logger)
);

sagaMiddleware.run(rootSaga);


export default store;
