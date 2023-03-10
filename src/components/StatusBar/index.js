import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../../store/redux/reducers/user.reducer';
import { AuthContext } from '../../context/AuthContext';

export default function StatusBar({ title }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const signOut = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            <Pressable
                delayLongPress={2000}
                onLongPress={() => {
                    dispatch(USER_LOGOUT());
                    navigation.popToTop();
                }}
            >
                <Image
                    source={require('../../assets/images/logout_img.png')}
                    style={styles.imageIcon}
                />
            </Pressable>
        </View>
    );
}
