/* eslint-disable react-native/no-inline-styles */
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    TextInput,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { USER_LOGIN_REQUEST } from '../../store/redux/reducers/user.reducer';
import { iconFacebook, iconGoogle, imgBackground } from '../../assets/images';
import { AuthContext } from '../../context/AuthContext';

export default function SignIn() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = useContext(AuthContext);

    const [errorEmail, setErrorEmail] = useState();
    const [showPassword, setShowPassword] = useState(false);

    // eslint-disable-next-line no-undef
    // loginUser = async (email, password) => {
    //     try {
    //         await firebase.auth().signInWithEmailAndPassword(email, password);
    //     } catch (error) {
    //         Alert.alert(error.message);
    //     }
    // };
    const handleSignIn = () => {
        dispatch(
            USER_LOGIN_REQUEST({
                data: {
                    email: email,
                    password: password,
                    usreId: email,
                },
                callback: {
                    goToHome: () => navigation.navigate('Home'),
                },
            }),
        );
    };

    return (
        <ImageBackground
            style={styles.imgBackground}
            source={imgBackground}
            resizeMode={'stretch'}
        >
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <View style={styles.topContent} />
                <View style={styles.loginWrapper}>
                    <View style={styles.emailWrapper}>
                        <TextInput
                            // onSubmitEditing={Keyboard.dismiss}
                            placeholder="Email"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />
                    </View>
                    <View style={styles.password}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            secureTextEntry={showPassword ? false : true}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                        <Text
                            onPress={() =>
                                setShowPassword(!showPassword ? true : false)
                            }
                            style={styles.eyePasswordWrapper}
                        >
                            <Image
                                source={require('../../assets/images/view.png')}
                                style={styles.eyePassword}
                            />
                        </Text>
                    </View>
                    <Text
                        style={{
                            color: '#62B6B7',
                            marginTop: 10,
                            paddingHorizontal: 10,
                        }}
                        onPress={() => {
                            alert('forgot');
                        }}
                    >
                        Forgot Password?
                    </Text>
                    {/* Creact SignUp Button */}

                    <TouchableOpacity
                        onPress={(value) => {
                            handleSignIn();
                            // signIn();
                        }}
                        style={styles.signUpWrapper}
                    >
                        <Text>Sign In</Text>
                    </TouchableOpacity>

                    {/* Handle connect to register */}
                    <View style={styles.creactAccount}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text
                                style={{
                                    color: '#62B6B7',
                                    marginRight: 10,
                                }}
                            >
                                Create account
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Login by connect from  icon */}
                    <View style={styles.iconWrapper}>
                        <Text
                            style={styles.icon}
                            onPress={() => alert('iconFb')}
                        >
                            <Image
                                source={iconFacebook}
                                style={{ width: 40, height: 40 }}
                            />
                        </Text>
                        <Text
                            onPress={() => navigation.navigate('Geolocation')}
                        >
                            <Image
                                source={iconGoogle}
                                style={{ width: 40, height: 40 }}
                            />
                        </Text>
                    </View>
                </View>
                <View style={styles.bottomContent} />
            </SafeAreaView>
        </ImageBackground>
    );
}
