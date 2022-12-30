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
import React, { useEffect, useState } from 'react';
import { imgBackground, iconFacebook, iconGoogle } from '../../assets/images';

import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

export default function SignUp() {
    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSignUp = () => {};

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
                    {/* <Text style={{ color: 'red', fontSize: 12 }}> {errorEmail}</Text> */}
                    <View style={styles.password}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                    </View>

                    <View style={styles.password}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            onChangeText={(text) => setConfirmPassword(text)}
                            value={confirmPassword}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={(value) => {
                            handleSignUp();
                        }}
                        style={styles.signUpWrapper}
                    >
                        <Text>Sign Up</Text>
                    </TouchableOpacity>

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
                <View style={styles.bottomContent} />
            </SafeAreaView>
        </ImageBackground>
    );
}
