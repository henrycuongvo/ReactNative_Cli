import { put, takeEvery, call } from 'redux-saga/effects';

import axios from 'axios';
import {
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_REQUEST,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    GET_PRODUCT_LIST_FAIL,
} from '../reducers/product.reducer';

function* createProductSaga(action) {
    try {
        const { cart, callback } = action.payload;
        yield axios.post(
            `http://127.0.0.1:5001/internapp-c1083/us-central1/app/api/products`,
            cart,
        );

        // { params: { _limit: limit, _page: page } },

        yield put({ type: CREATE_PRODUCT_SUCCESS });
        yield callback.goToList();
    } catch (e) {
        console.log('failed');
        yield put({
            type: CREATE_PRODUCT_FAIL,
            payload: {
                error: 'Lỗi không xác định',
            },
        });
    }
}

// Handle Api get data

function* getProductListSaga(action) {
    try {
        const result = yield call(
            axios.get,
            'http://127.0.0.1:5001/internapp-c1083/us-central1/app/api/products',
        );
        yield put({
            type: GET_PRODUCT_LIST_SUCCESS,
            payload: {
                data: result.data.data,
            },
        });
    } catch (error) {
        console.log('ERROR');
        yield put({
            type: GET_PRODUCT_LIST_FAIL,
            payload: {
                error: 'Lỗi không xác định',
            },
        });
    }
}

export default function* productSaga() {
    yield takeEvery(CREATE_PRODUCT_REQUEST, createProductSaga);
    yield takeEvery(GET_PRODUCT_LIST_REQUEST, getProductListSaga);
}
