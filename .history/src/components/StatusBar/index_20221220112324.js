import { View, Text } from 'react-native';
import React from 'react';

export default function StatusBar({ props }) {
    return (
        <View>
            <Text> {props}</Text>
            <Text>StatusBar</Text>
        </View>
    );
}
