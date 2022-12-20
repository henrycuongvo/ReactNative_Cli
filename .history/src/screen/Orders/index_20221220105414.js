import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView, SafeArray } from 'react-native';

export default function Orders() {
    return (
        <ScrollView>
            <SafeArray>
                <Text> Orders</Text>
            </SafeArray>
        </ScrollView>
    );
}
