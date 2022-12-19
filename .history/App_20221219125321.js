/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screen/Home';
import SignIn from './src/screen/SignIn';
import MainNavigation from './src/screen/Home';
import { styles } from './App.style';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                {/* <SignIn /> */}
                <View></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
