import { createSlice } from '@reduxjs/toolkit';
import { AsyncStorage } from 'react-native';

const initialState = {
    userInfo: {
        data: {},
        loading: true,
        error: null,
    },
};

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        USER_LOGOUT: (state) => {
            AsyncStorage.removeItem('accessToken');
            return {
                ...state,
                userInfo: {
                    data: {},
                    loading: false,
                    error: null,
                },
            };
        },
        USER_LOGIN_REQUEST: (state) => {
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    loading: false,
                    error: null,
                },
            };
        },
        USER_LOGIN_SUCCESS: (state, action) => {
            const { data } = action.payload;
            console.log('reducers', data.email);
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    data: data,
                },
                loginData: {
                    ...state.loginData,
                    loading: false,
                },
            };
        },
        USER_LOGIN_FAIL: (state, action) => {
            const { error } = action.payload;

            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    loading: false,
                    error: error,
                },
            };
        },
    },
});
export const {
    USER_LOGOUT,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
} = userReducer.actions;
export default userReducer.reducer;
