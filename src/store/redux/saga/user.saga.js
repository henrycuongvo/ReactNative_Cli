import { put, takeEvery } from 'redux-saga/effects';
// import { notification } from 'antd';
import axios from 'axios';
import {
    USER_LOGOUT,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
} from '../reducers/user.reducer';
import { AsyncStorage } from 'react-native';

function* logOutSaga(action) {}
function* loginSaga(action) {
    try {
        const { data, callback } = action.payload;
        const resuilt = yield axios.post(
            'http://127.0.0.1:5001/internapp-c1083/us-central1/app/api/signin',
            data,
        );
        console.log(resuilt.data);
        if (data.email && data.password) {
            yield put({
                type: USER_LOGIN_SUCCESS,
                payload: {
                    data: data,
                },
            });
            // yield AsyncStorage.setItem('accessToken', result.data.email);

            yield callback.goToHome();
        } else {
            throw new Error('Incorrect password');
        }
    } catch (e) {
        yield put({
            type: USER_LOGIN_FAIL,
            payload: {
                error: 'Email hoặc mật khẩu không đúng!',
            },
        });
    }
}

export default function* userSaga() {
    yield takeEvery(USER_LOGIN_REQUEST, loginSaga);
    // yield takeEvery(USER_REGISTER_REQUEST, registerSaga);
    // yield takeEvery(GET_USER_INFO_REQUEST, getUserInfoSaga);
    yield takeEvery(USER_LOGOUT, logOutSaga);
}
