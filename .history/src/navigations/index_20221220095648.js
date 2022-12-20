// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screen/SignIn';
// import Home from '../screen/Home';

// const Stack = createNativeStackNavigator();
// export default function MainNavigator() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
//                 {/* <Stack.Screen name="Home" component={Home} /> */}
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableScreens } from 'react-native-screens';
enableScreens(true);

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    initialRouteName="Sign In"
                    name="SignIn"
                    component={SignIn}
                />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;
