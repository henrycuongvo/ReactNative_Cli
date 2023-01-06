// import React, { useEffect, useMemo } from 'react';
// import { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { enableScreens } from 'react-native-screens';
// import { Provider } from 'react-redux';

// import { AuthContext, AuthProvider } from '../context/AuthContext';
// import Home from '../screen/Home';
// import { store } from '../../store';
// import SignIn from '../screen/SignIn';
// import Orders from '../screen/Orders';
// import SignUp from '../screen/SignUp';
// import { ActivityIndicator, AsyncStorage, View } from 'react-native';
// enableScreens(true);

// const Stack = createNativeStackNavigator();

// function MainNavigator() {
//     const [isLoading, setisLoading] = useState(false);
//     const [userToken, setuserToken] = useState(null);
//     const [isFirstLaunch, setisFirstLaunch] = useState(null);
//     let routeName;
//     useEffect(() => {
//         AsyncStorage.getItem('areadyLaunched').then((value) => {
//             if (value === null) {
//                 AsyncStorage.setItem('areadyLaunched', 'true');
//                 setisFirstLaunch(true);
//             } else {
//                 setisFirstLaunch(false);
//             }
//         });
//     }, []);

//     const authContext = useMemo(
//         () => ({
//             signIn: () => {
//                 setisLoading(false);
//                 setuserToken('dadsdsd');
//             },
//             signUp: () => {
//                 setisLoading(false);
//                 setuserToken('dadsdsd');
//             },
//             signOut: () => {
//                 setisLoading(true);
//                 setuserToken(null);
//             },
//         }),
//         [],
//     );
//     if (isFirstLaunch === null) {
//         return null;
//     } else if (isFirstLaunch === true) {
//         routeName = 'Onboarding';
//     } else {
//         routeName = 'Login';
//     }
//     // useEffect(() => {
//     //     setTimeout(() => {
//     //         setisLoading(false);
//     //     }, 1000);
//     // }, []);
//     if (isLoading) {
//         return (
//             <View
//                 style={{
//                     flex: 1,
//                     justifyContent: 'center',
//                     alignSelf: 'center',
//                 }}
//             >
//                 <ActivityIndicator size={'large'} />
//             </View>
//         );
//     }
//     return (
//         <Provider store={store}>
//             <AuthContext.Provider
//                 value={
//                     (authContext.signIn,
//                     authContext.signOut,
//                     authContext.signUp)
//                 }
//             >
//                 <NavigationContainer>
//                     {userToken !== null ? (
//                         <Stack.Navigator screenOptions={{ headerShown: false }}>
//                             <Stack.Screen name="Home" component={Home} />
//                             <Stack.Screen name="Orders" component={Orders} />
//                             <Stack.Screen name="SignUp" component={SignUp} />
//                         </Stack.Navigator>
//                     ) : (
//                         <Stack.Navigator screenOptions={{ headerShown: false }}>
//                             <Stack.Screen
//                                 // initialRouteName="SignIn"
//                                 name="Sign In"
//                                 component={SignIn}
//                             />
//                         </Stack.Navigator>
//                     )}
//                 </NavigationContainer>
//             </AuthContext.Provider>
//         </Provider>
//     );
// }

// export default MainNavigator;

import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { store } from '../../store';

const Providers = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};
export default Providers;
