import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator></Stack.Navigator>
        </NavigationContainer>
    );
};
