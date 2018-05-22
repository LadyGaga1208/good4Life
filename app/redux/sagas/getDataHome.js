import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { GET_FAILED, GET_SUCCEEDED, GET_REQUEST } from '../action/types';

function getApi() {
    return axios.get('http://202.191.56.103:5588/local-server/HomeScreenInfo?functionName=GetHomeInfo&accountId=1&accountType=1');
}

export function* getDataHome() {
    try {
        const data = yield call(getApi);
        yield put({ type: GET_SUCCEEDED, payload: data.data });
    } catch (error) {
        yield put({ type: GET_FAILED });
    }
}

export default function* getDataHoneInfo() {
    yield takeEvery(GET_REQUEST, getDataHome);
}

