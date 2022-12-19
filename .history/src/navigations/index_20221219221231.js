import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screen/SignIn';
import Home from '../screen/Home';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
