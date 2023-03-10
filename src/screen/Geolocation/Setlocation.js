import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, Dimensions, StyleSheet, Text, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const { width, height } = Dimensions.get('window');
const ASPEC_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPEC_RATIO;
const INITIAL_POSITION = {
    latitude: 10,
    longitude: 10,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGTITUDE_DELTA,
};

export default function GoogleMaps() {
    return (
        <SafeAreaView style={style.container}>
            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={INITIAL_POSITION}
                />
                <GooglePlacesAutocomplete
                    placeholder="Search"
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyA5hjO8LOECB2dkw7SxxkKwVSPF9BWhVUg',
                        language: 'en',
                    }}
                />
                <Text> Hello App</Text>
            </View>
        </SafeAreaView>
    );
}
export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
