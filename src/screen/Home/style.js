import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 20,
        flex: 1,
        height: 100,
    },
    statusBar: {
        width: '100%',
        height: '5%',
        backgroundColor: 'grey',
    },
    imgBugerWrapper: {
        backgroundColor: 'red',
        width: '100%',
        height: '80%',
    },

    //Css for table selection
    tableWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    table: {
        width: '90%',
        // height: "100%",
        position: 'relative',
        top: 45,
        alignSelf: 'center',
        borderColor: '#333',
        borderWidth: 1,
    },
    rowIng: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 20,
    },
    buttonWrapper: {
        width: '40%',
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    countShow: {
        fontSize: 20,
        left: 10,
        marginRight: 20,
        textAlign: 'center',
    },
    buttonCount: {
        backgroundColor: '#82C3EC',
        alignContent: 'center',
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    textButton: {
        fontSize: 20,
        textAlign: 'center',
    },

    //Button Checkout
    buttonCheckout: {
        width: '80%',
        marginTop: 50,
        alignSelf: 'center',
        backgroundColor: '#F8F988',
        borderColor: '#333',
        borderWidth: 2,
    },
});
