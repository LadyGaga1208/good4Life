import { put, call, takeEvery } from 'redux-saga/effects';

import HomeApi from '../../api/HomeApi';
import { GET_FAILED, GET_SUCCEEDED, GET_REQUEST } from '../action/types';

export function* getDataHome() {
    try {
        const response = yield call(HomeApi.getHomeScreenInfo, 1, 1);
        yield put({ type: GET_SUCCEEDED, payload: response.data });
    } catch (error) {
        yield put({ type: GET_FAILED });
    }
}

export default function* getDataHoneInfo() {
    yield takeEvery(GET_REQUEST, getDataHome);
}

