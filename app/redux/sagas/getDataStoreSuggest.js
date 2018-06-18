import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { TabStore } from '../action/types';
import { url } from '../../api/Url';


function getApi(value) {
    return axios.get(`${url}/StoreInfo?functionName=GetSuggestStore&accountId=1&accountType=1&index=${value}`);
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

