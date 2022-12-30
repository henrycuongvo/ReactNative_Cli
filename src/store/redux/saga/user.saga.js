import { call, put, takeEvery } from 'redux-saga/effects';
// import { notification } from 'antd';
import axios from 'axios';
import {
    USER_LOGOUT,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
} from '../reducers/user.reducer';
import { Alert } from 'react-native';
import {
    isValidateEmail,
    isValidatePassword,
} from '../../../utilies/Validation';

import { AsyncStorage } from 'react-native';

function* logOutSaga(action) {}
function* loginSaga(action) {
    try {
        const { data, callback } = action.payload;
        if (data.email.length === 0) {
            Alert.alert('', 'Please enter email');
        } else if (isValidateEmail(data.email) === false) {
            Alert.alert('', 'Email not correct format');
        } else if (data.password === undefined) {
            Alert.alert('', 'Please enter password');
        } else if (
            isValidateEmail(data.email) === true &&
            isValidatePassword(data.password) === true
        ) {
            const resuilt = yield axios.post(
                'http://127.0.0.1:5001/internapp-c1083/us-central1/app/api/signin',
                data,
            );
            yield put({
                type: USER_LOGIN_SUCCESS,
                payload: {
                    data: data,
                },
            });
            yield callback.goToHome();
        }
    } catch (e) {
        console.log('failed');

        Alert.alert('', 'Email or Password not correct');
    }
}

export default function* userSaga() {
    yield takeEvery(USER_LOGIN_REQUEST, loginSaga);
    // yield takeEvery(USER_REGISTER_REQUEST, registerSaga);
    // yield takeEvery(GET_USER_INFO_REQUEST, getUserInfoSaga);
    yield takeEvery(USER_LOGOUT, logOutSaga);
}
