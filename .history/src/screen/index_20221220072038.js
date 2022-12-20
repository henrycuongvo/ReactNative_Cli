import { View, Text } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import Home from './Home';

export default function RootComponent() {
    return (
        <Provider>
            <Home />
        </Provider>
    );
}
