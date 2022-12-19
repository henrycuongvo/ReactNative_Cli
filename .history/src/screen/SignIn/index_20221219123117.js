import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {imgBackground} from '../../assets/images';

export default function SignIn() {
  return (
    // <SafeAreaView>
    //   <ScrollView>

    //   </ScrollView>
    // </SafeAreaView>
    <ImageBackground
      style={{ flex;  1}}
      source={imgBackground}
      resizeMode={'cover'}
    />
  );
}
