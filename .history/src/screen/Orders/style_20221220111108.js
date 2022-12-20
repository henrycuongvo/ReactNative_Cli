import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF8F1',
    },
    scrollView: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    table: {
        width: '100%',
        backgroundColor: 'grey',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    ingredients: {
        flexDirection: 'row',
    },
    price: {
        flexDirection: 'row',
    },
});
