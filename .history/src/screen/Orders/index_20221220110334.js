import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
export default function Orders() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Salad</Text>
                    <Text> 1</Text>
                </View>
                <View>
                    <Text>Price </Text>
                    <Text> 1</Text>
                </View>
                <Text> Orders</Text>
            </ScrollView>
        </SafeAreaView>
    );
}
