import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#97DECE',
    },
    scrollView: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    table: {
        width: '100%',
        backgroundColor: '#BAD7E9',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    ingredients: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
});
