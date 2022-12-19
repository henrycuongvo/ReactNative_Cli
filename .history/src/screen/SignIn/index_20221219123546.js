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

export default function SignIn() {
    return (
        <SafeAreaView>
            <StatusBar barStyle={'light-content'}></StatusBar>
            <View>
                {' '}
                <Text>Top content</Text>
            </View>
            <View>
                {' '}
                <Text>Between content</Text>
            </View>
            <View>
                <Text>Foot Content</Text>
            </View>
        </SafeAreaView>
    );
}
