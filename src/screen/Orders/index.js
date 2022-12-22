import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import StatusBar from '../../components/StatusBar';
import { styles } from './style';

export default function Orders() {
    const getPrice = useSelector((state) => state.burger.totalPrice);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar title="Orders" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.table}>
                    <View style={styles.ingredients}>
                        <Text>Salad</Text>
                        <Text> 1</Text>
                    </View>
                    <View style={styles.price}>
                        <Text>Price </Text>
                        <Text> ${getPrice}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
