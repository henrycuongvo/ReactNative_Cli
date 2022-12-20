import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './style';

export default function StatusBar({ props }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {props} Hello</Text>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/images/logout_img.png')}
                    style={styles.imageIcon}
                />
            </TouchableOpacity>
        </View>
    );
}
