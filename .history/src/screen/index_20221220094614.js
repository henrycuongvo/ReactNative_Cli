import { View, Text } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import Home from './Home';
import store from '../../store';
export default function RootComponent() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}
