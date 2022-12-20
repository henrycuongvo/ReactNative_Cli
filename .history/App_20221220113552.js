/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';

import SignIn from './src/screen/SignIn';
import { styles } from './App.style';
import MainNavigator from './src/navigations';
import Home from './src/screen/Home';
import RootComponent from './src/screen';
import StatusBar from './src/components/StatusBar';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
    return <MainNavigator />;
};

export default App;
