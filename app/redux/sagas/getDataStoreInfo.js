import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    GET_FAILED_STORE_INFO,
    GET_SUCCEEDED_STORE_INFO,
    GET_REQUEST_STORE_INFO
} from '../action/types';

function getApi(storeId) {
    return axios.get(`http://202.191.56.103:5588/local-server/StoreInfo?functionName=GetStoreInfo&storeId=${storeId}`);
}

function* getDataStoreInfo(action) {
    try {
        const response = yield call(getApi, action.storeId);
        console.log(response.data.imageStoreList);
        if (response.data.imageStoreList[0] === undefined) {
            throw Error('haha');
        } else {
            yield put({
                type: GET_SUCCEEDED_STORE_INFO,
                payload: response.data
            });
        }
    } catch (error) {
        yield put({ type: GET_FAILED_STORE_INFO });
    }
}

export default function* getDataStoreInf() {
    yield takeEvery(GET_REQUEST_STORE_INFO, getDataStoreInfo);
}
