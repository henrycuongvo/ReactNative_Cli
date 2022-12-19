import {View, Text, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import {imgBackground} from '../../assets/images';

export default function SignIn() {
  return (
    <ScrollView>
      <ImageBackground
        style={{flex: 1}}
        source={imgBackground}
        resizeMode={'cover'}
      />
      {/* <Text>Hello</Text> */}
    </ScrollView>
  );
}
