import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
    GET_FAILED_STORE,
    GET_SUCCEEDED_STORE,
    GET_REQUEST_STORE
} from '../action/types';

function getApi(value) {
    return axios.get(`http://202.191.56.103:5588/local-server/StoreInfo?functionName=GetStoreList&accountId=1&accountType=1&index=${value}`);
}

function* getListStore(action) {
    try {
        const response = yield call(getApi, action.value);
        yield put({
            type: GET_SUCCEEDED_STORE,
            payload: response.data.storeInfoList
        });
    } catch (error) {
        yield put({ type: GET_FAILED_STORE });
    }
}

export default function* getDataListStore() {
    yield takeEvery(GET_REQUEST_STORE, getListStore);
}

