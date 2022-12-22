import { put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
// import axios from 'axios';
import { USER_LOGOUT } from '../reducers/user.reducer';
import { AsyncStorage } from 'react-native';

function* logOutSaga(action) {}

export default function* userSaga() {
    // yield takeEvery(USER_LOGIN_REQUEST, loginSaga);
    // yield takeEvery(USER_REGISTER_REQUEST, registerSaga);
    // yield takeEvery(GET_USER_INFO_REQUEST, getUserInfoSaga);
    yield takeEvery(USER_LOGOUT, logOutSaga);
}
