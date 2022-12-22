import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../../store/redux/reducers/user.reducer';

export default function StatusBar({ title }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {title} </Text>
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
