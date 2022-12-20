import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './style';

export default function StatusBar({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {props.title} </Text>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/images/logout_img.png')}
                    style={styles.imageIcon}
                />
            </TouchableOpacity>
        </View>
    );
}
