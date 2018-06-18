import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { TabStore } from '../action/types';
import { url } from '../../api/Url';


function getApi(value) {
    return axios.get(`${url}/StoreInfo?functionName=GetFollowStore&accountId=1&accountType=1&index=${value}`);
}

function* getStoreFollow(action) {
    try {
        const response = yield call(getApi, action.value);
        yield put({
            type: TabStore.GET_SUCCEEDED_STORE_FOLLOW,
            payload: response.data.storeInfoList
        });
    } catch (error) {
        yield put({ type: TabStore.GET_FAILED_STORE_FOLLOW });
    }
}

export default function* getDataStoreFollow() {
    yield takeEvery(TabStore.GET_REQUEST_STORE_FOLLOW, getStoreFollow);
}

