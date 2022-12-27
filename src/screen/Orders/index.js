import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import StatusBar from '../../components/StatusBar';
import { GET_PRODUCT_LIST_REQUEST } from '../../store/redux/reducers/product.reducer';
import { styles } from './style';

export default function Orders() {
    const cart = useSelector((state) => state.products.productList.data);
    console.log('CART', cart);
    const nameItem = cart.length !== 0 ? Object.keys(cart[0]?.cart) : [];
    const prireFilter = nameItem?.filter((e) => {
        if (e !== 'price') {
            return true;
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar title="Orders" />
            <ScrollView style={styles.scrollView}>
                {cart.map((item) => {
                    return (
                        <View style={styles.table}>
                            <View style={styles.ingredients}>
                                {prireFilter?.map((name) => {
                                    return (
                                        <>
                                            <View
                                                style={styles.ingredientWrapper}
                                            >
                                                <Text>{name}</Text>
                                                <Text>${item.cart[name]}</Text>
                                            </View>
                                        </>
                                    );
                                })}
                                <View style={styles.price}>
                                    <Text> Price</Text>
                                    <Text>${item.cart.price}</Text>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}
