import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import Home from '../screen/Home';
import { store } from '../../store';
import SignIn from '../screen/SignIn';
import Orders from '../screen/Orders';
enableScreens(true);

const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        initialRouteName="SignIn"
                        name="Sign In"
                        component={SignIn}
                    />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Orders" component={Orders} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default MainNavigator;
