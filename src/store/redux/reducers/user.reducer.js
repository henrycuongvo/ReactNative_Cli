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
    },
});
export const { USER_LOGOUT } = userReducer.actions;
export default userReducer.reducer;
