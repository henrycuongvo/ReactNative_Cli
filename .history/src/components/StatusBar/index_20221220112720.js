import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './style';

export default function StatusBar({ props }) {
    return (
        <View>
            <Text> {props}</Text>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/images/logout_img.png')}
                    style={styles.imageIcon}
                />
            </TouchableOpacity>
        </View>
    );
}
