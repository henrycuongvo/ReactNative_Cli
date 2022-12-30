import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import firestore from '@react-native-firebase/firestore';
// import Geolocation from 'react-native-geolocation-service';

// const userCollection = firestore().collection('Users');

import StatusBar from '../../components/StatusBar';
import { styles } from './style';

import { GET_PRODUCT_LIST_REQUEST } from '../../store/redux/reducers/product.reducer';

export default function Orders() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GET_PRODUCT_LIST_REQUEST());
    }, [dispatch]);
    //GET Data from store
    const cart = useSelector((state) => state.products.productList.data);
    const data = cart;
    //Handle Loading Data
    const [isLoading, setisLoading] = useState(false);
    const [pageCurrent, setpageCurrent] = useState(1);

    const renderFooter = () => {
        return isLoading ? (
            <View style={styles.loader}>
                <ActivityIndicator size={'large'} />
            </View>
        ) : null;
    };

    // Render DATA List
    const renderItem = ({ item }) => {
        const nameItem = cart.length !== 0 ? Object.keys(cart[0]?.cart) : [];
        const prireFilter = nameItem?.filter((e) => {
            if (e !== 'price') {
                return true;
            }
        });

        return (
            <View key={item.id} style={styles.table}>
                <View style={styles.ingredients}>
                    {prireFilter?.map((name, index) => {
                        return (
                            <>
                                <View
                                    key={index}
                                    style={styles.ingredientWrapper}
                                >
                                    <Text>{name}</Text>
                                    <Text>{item.cart[name]}</Text>
                                    {/* <Text>{item.cart.id}</Text> */}
                                </View>
                            </>
                        );
                    })}
                    <View style={styles.price}>
                        <Text style={{ fontSize: 17 }}> Price</Text>
                        <Text style={{ fontSize: 17 }}>${item.cart.price}</Text>
                    </View>
                </View>
            </View>
        );
    };

    //GeoLocation
    //  componentDidMount() {
    //     if (hasLocationPermission) {
    //         Geolocation.getCurrentPosition(
    //             (position) => {
    //                 console.log(position);
    //             },
    //             (error) => {
    //                 // See error code charts below.
    //                 console.log(error.code, error.message);
    //             },
    //             {
    //                 enableHighAccuracy: true,
    //                 timeout: 15000,
    //                 maximumAge: 10000,
    //             },
    //         );
    //     }
    // }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar title="Orders" />
            <FlatList
                style={styles.scrollView}
                data={data}
                keyExtractor={(item) => item}
                renderItem={renderItem}
                initialNumToRender={2}
                ListFooterComponent={renderFooter}
                removeClippedSubviews={true}
                // onEndReached={ }
                // onEndReachedThreshold = {}
            />
        </SafeAreaView>
    );
}
