import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { TabStore } from '../action/types';

function getApi(value) {
    return axios.get(`http://202.191.56.103:5588/local-server/StoreInfo?functionName=GetSuggestStore&accountId=1&accountType=1&index=${value}`);
}

function* getStoreSuggest(action) {
    try {
        const response = yield call(getApi, action.value);
        yield put({
            type: TabStore.GET_SUCCEEDED_STORE_SUGGEST,
            payload: response.data.storeInfoList
        });
    } catch (error) {
        yield put({ type: TabStore.GET_FAILED_STORE_SUGGEST });
    }
}

export default function* getDataStoreSuggest() {
    yield takeEvery(TabStore.GET_REQUEST_STORE_SUGGEST, getStoreSuggest);
}

