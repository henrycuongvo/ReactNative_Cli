import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from './style';
export default function Orders() {
    return (
        <SafeAreaView style={styles.contaner}>
            <ScrollView>
                <View style={styles.table}>
                    <View>
                        <Text>Salad</Text>
                        <Text> 1</Text>
                    </View>
                    <View>
                        <Text>Price </Text>
                        <Text> 1</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
