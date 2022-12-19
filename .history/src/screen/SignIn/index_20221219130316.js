/* eslint-disable react-native/no-inline-styles */
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import React from 'react';
import { imgBackground } from '../../assets/images';
import { styles } from './style';

export default function SignIn() {
    return (
        <ImageBackground>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'}></StatusBar>
                <View style={styles.topContent}>
                    <Text>Top content</Text>
                </View>
                <View style={styles.betweenContent}>
                    <Text>Between content</Text>
                </View>
                <View style={styles.bottomContent}>
                    <Text>Foot Content</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
