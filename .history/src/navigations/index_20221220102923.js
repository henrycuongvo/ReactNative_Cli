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
import Home from '../screen/Home';
import { Provider } from 'react-redux';
import { store } from '../../store';
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
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default MainNavigator;
