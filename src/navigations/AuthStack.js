import React, { useEffect, useMemo, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableScreens } from 'react-native-screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from '../screen/Home';
import SignIn from '../screen/SignIn';
import Orders from '../screen/Orders';
import SignUp from '../screen/SignUp';
import GeoLocationScreen from '../screen/Geolocation/GeolocationScreen';
import SetLocation from '../screen/Geolocation/Setlocation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
enableScreens(true);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
    const [isFirstLaunch, setisFirstLaunch] = useState(null);
    let routeName;
    useEffect(() => {
        AsyncStorage.getItem('areadyLaunched').then((value) => {
            if (value === null) {
                AsyncStorage.setItem('areadyLaunched', 'true');
                setisFirstLaunch(true);
            } else {
                setisFirstLaunch(false);
            }
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch === true) {
        routeName = 'Home';
    } else {
        routeName = 'SignIn';
    }
    return (
        <Stack.Navigator
            initialRouteName={routeName}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen>
                <Tab.Navigator>
                    <Tab.Screen name="SignIn" component={SignIn} />
                    <Tab.Screen name="SignUp" component={SignUp} />
                </Tab.Navigator>
            </Stack.Screen>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="Orders"
                component={Orders}
                // options={{
                //     header: () => null,
                // }}
            />
            <Stack.Screen name="Geolocation" component={GeoLocationScreen} />
            <Stack.Screen name="Setlocation" component={SetLocation} />
        </Stack.Navigator>
    );
}

export default AuthStack;
