import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import { AuthProvider } from '../context/AuthContext';
import Home from '../screen/Home';
import { store } from '../../store';
import SignIn from '../screen/SignIn';
import Orders from '../screen/Orders';
import SignUp from '../screen/SignUp';
enableScreens(true);

const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            initialRouteName="SignIn"
                            name="Sign In"
                            component={SignIn}
                        />
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Orders" component={Orders} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthProvider>
        </Provider>
    );
}

export default MainNavigator;
