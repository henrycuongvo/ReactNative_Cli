import React from 'react';
import { View, Text } from 'react-native';

import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://henrycuongtest.api',
});

export default function Axios() {
    return (
        <View>
            <Text>Axios</Text>
        </View>
    );
}
