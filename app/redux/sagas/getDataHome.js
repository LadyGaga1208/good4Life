import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { GET_FAILED, GET_SUCCEEDED, GET_REQUEST } from '../action/types';
import { url } from '../../api/Url';

function getApi() {
    return axios.get(`${url}/HomeScreenInfo?functionName=GetHomeInfo&accountId=1&accountType=1`);
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

