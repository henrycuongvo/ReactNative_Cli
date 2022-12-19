/* eslint-disable react-native/no-inline-styles */
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    TextInput,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { imgBackground } from '../../assets/images';
import { isValidateEmail, isValidatePassword } from '../../utilies/validation';

import { styles } from './style';

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [errorEmail, setErrorEmail] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const handleSignUp = () => {
        if (isValidateEmail === true && isValidatePassword === true) {
            // alert("sign up success");
        } else {
            Alert.alert('Invalid email', 'Please input valid email', [
                {
                    text: 'OK',
                    onPress: () => console.log('Cancel Pressed'),
                },
            ]);
            // alert("Email or Password not correct");
        }
    };

    return (
        <ImageBackground
            style={styles.imgBackground}
            source={imgBackground}
            resizeMode={'stretch'}
        >
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'}></StatusBar>
                <View style={styles.topContent}>
                    <Text>Top content</Text>
                </View>
                <View style={styles.loginWrapper}>
                    <View style={styles.emailWrapper}>
                        <TextInput
                            // onSubmitEditing={Keyboard.dismiss}
                            placeholder="Email"
                        />
                    </View>
                    <Text style={{ color: 'red', fontSize: 12 }}>
                        {' '}
                        {errorEmail}
                    </Text>
                    <View style={styles.password}>
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={showPassword ? false : true}
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
                    {/* <Text> </Text> */}
                    <Text
                        style={{
                            color: '#62B6B7',
                            marginTop: 10,
                        }}
                        onPress={() => {
                            alert('forgot');
                        }}
                    >
                        Forgot Password?
                    </Text>
                    {/* Creact SignUp Button */}

                    <TouchableOpacity
                        onPress={() => {
                            handleSignUp();
                        }}
                        style={styles.signUpWrapper}
                    >
                        <Text>Sign Up</Text>
                        {/* <Link to={{ screen: "Register" }}> Register</Link> */}
                    </TouchableOpacity>

                    {/* Handle connect to register */}
                    <View style={styles.creactAccount}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    color: '#62B6B7',
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
                        <Text onPress={() => alert('iconGG')}>
                            <Image
                                source={iconGoogle}
                                style={{ width: 40, height: 40 }}
                            />
                        </Text>
                    </View>
                </View>
                <View style={styles.bottomContent}>
                    <Text>Foot Content</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
