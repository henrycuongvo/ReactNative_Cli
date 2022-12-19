/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';

import { enableScreens } from 'react-native-screens';
enableScreens(false);

import SignIn from './src/screen/SignIn';
import { styles } from './App.style';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
    return <SignIn />;
};

export default App;
