import React, { useEffect, useState } from 'react';
import {
    View,
    Button,
    SafeAreaView,
    Platform,
    Alert,
    Text,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';
export default function GeoLocationScreen() {
    const requestAuthorization = () => {
        Geolocation.requestAuthorization();
    };
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
    });
    console.log(position);
    useEffect(() => {
        Geolocation.requestAuthorization();

        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            console.log('CRD', crd);
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
            });
        });
    }, []);
    //     [requestAuthorization];
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View>
                <Button
                    title="Request Authorization"
                    onPress={requestAuthorization}
                />
                <Text>Hello</Text>
            </View>
            <View>
                <Button
                    title="SetLocation"
                    onPress={() => navigation.navigate('Setlocation')}
                />
            </View>
        </SafeAreaView>
    );
}
