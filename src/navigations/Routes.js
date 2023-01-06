import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import SignIn from '../screen/SignIn';
import Home from '../screen/Home';
import Orders from '../screen/Orders';

export default function Routes() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}
