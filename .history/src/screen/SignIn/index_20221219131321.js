/* eslint-disable react-native/no-inline-styles */
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    TextInput,
} from 'react-native';
import React from 'react';
import { imgBackground } from '../../assets/images';
import { styles } from './style';

export default function SignIn() {
    return (
        <ImageBackground
            style={styles.imgBackground}
            source={require('../../assets/images/background.jpeg')}
            resizeMode={'stretch'}
        >
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'}></StatusBar>
                <View style={styles.topContent}>
                    <Text>Top content</Text>
                </View>
                <View style={styles.loginWrapper}>
                    <View style={styles.emailWrapper}>
                        <TextInput
                            // onSubmitEditing={Keyboard.dismiss}
                            placeholder="Email"
                        />
                    </View>
                </View>
                <View style={styles.bottomContent}>
                    <Text>Foot Content</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
