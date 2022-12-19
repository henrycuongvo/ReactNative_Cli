import {View, Text, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import {imgBackground} from '../../assets/images';

export default function SignIn() {
  return (
    <ScrollView>
      <ImageBackground
        style={{flex: 1, width: 100, height: 100}}
        source={imgBackground}
        resizeMode={'cover'}
      />
      {/* <Text>Hello</Text> */}
    </ScrollView>
  );
}
