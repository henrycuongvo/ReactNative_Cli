/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
{
    /* <script src="http://192.168.88.217:8097"></script>; */
}
navigator.geolocation = require('@react-native-community/geolocation');

import Providers from './src/navigations';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
    return <Providers />;
};

export default App;
