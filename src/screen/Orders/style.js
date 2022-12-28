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
        paddingHorizontal: 10,
    },
    table: {
        width: '100%',
        backgroundColor: '#BAD7E9',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        paddingVertical: 5,
    },
    ingredients: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    ingredientWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    loader: {
        marginTop: 10,
        alignItems: 'center',
    },
});
