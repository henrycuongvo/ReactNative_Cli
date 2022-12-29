import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
    decrement,
    increment,
    incrementByAmount,
} from '../../store/redux/reducers/burger.reducer';
import { useNavigation } from '@react-navigation/native';
import { imgBuger } from '../../assets/images';
import { styles } from './style';
import StatusBar from '../../components/StatusBar';
import {
    CREATE_PRODUCT_REQUEST,
    GET_PRODUCT_LIST_REQUEST,
} from '../../store/redux/reducers/product.reducer';

export default function Home() {
    const getCart = useSelector((state) => state.burger.cart);
    const getPrice = useSelector((state) => state.burger.totalPrice);

    const [salad, setSalad] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0);
    useEffect(() => {
        dispatch(incrementByAmount());
    });

    useEffect(() => {
        setSalad(getCart.salad);
        setBacon(getCart.bacon);
        setCheese(getCart.cheese);
        setMeat(getCart.meat);
    }, [getCart]);
    //Get Data from store

    const dispatch = useDispatch();
    const nagigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <StatusBar title="Your order" />
                <View style={styles.imgBugerWrapper}>
                    <Image
                        source={imgBuger}
                        resizeMode={'cover'}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
                {/* Table Select */}
                {/* SALAD */}
                <View style={styles.tableWrapper}>
                    <View style={styles.table}>
                        <View style={styles.rowIng}>
                            <Text style={styles.label}> Salad</Text>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    style={styles.buttonCount}
                                    onPress={() => dispatch(decrement('salad'))}
                                >
                                    <Text style={styles.textButton}>-</Text>
                                </TouchableOpacity>
                                <Text valu style={styles.countShow}>
                                    {getCart.salad}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => dispatch(increment('salad'))}
                                    style={styles.buttonCount}
                                >
                                    <Text style={styles.textButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* BACON */}
                        <View style={styles.rowIng}>
                            <Text style={styles.label}> Bacon</Text>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    style={styles.buttonCount}
                                    onPress={() => dispatch(decrement('bacon'))}
                                >
                                    <Text style={styles.textButton}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.countShow}>
                                    {getCart.bacon}
                                </Text>
                                <TouchableOpacity
                                    style={styles.buttonCount}
                                    onPress={() => dispatch(increment('bacon'))}
                                >
                                    <Text style={styles.textButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* CHEESE */}
                        <View style={styles.rowIng}>
                            <Text style={styles.label}> Cheese</Text>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    style={styles.buttonCount}
                                    onPress={() =>
                                        dispatch(decrement('cheese'))
                                    }
                                >
                                    <Text style={styles.textButton}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.countShow}>
                                    {getCart.cheese}
                                </Text>
                                <TouchableOpacity
                                    style={styles.buttonCount}
                                    onPress={() =>
                                        dispatch(increment('cheese'))
                                    }
                                >
                                    <Text style={styles.textButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* MEAT */}
                        <View style={styles.rowIng}>
                            <Text style={styles.label}> Meat</Text>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    style={styles.buttonCount}
                                    onPress={() => dispatch(decrement('meat'))}
                                >
                                    <Text style={styles.textButton}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.countShow}>
                                    {getCart.meat}
                                </Text>
                                <TouchableOpacity
                                    style={styles.buttonCount}
                                    onPress={() => dispatch(increment('meat'))}
                                >
                                    <Text style={styles.textButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* <Text> {getTotalPrice}</Text> */}
                </View>
                {/* Checkout Button */}
                <View style={styles.buttonCheckout}>
                    <Button
                        onPress={() => {
                            dispatch(
                                CREATE_PRODUCT_REQUEST({
                                    cart: {
                                        salad: salad,
                                        bacon: bacon,
                                        cheese: cheese,
                                        meat: meat,
                                        price: getPrice,
                                    },
                                    callback: {
                                        goToList: () =>
                                            nagigation.navigate('Orders'),
                                    },
                                }),
                            );
                            // dispatch(GET_PRODUCT_LIST_REQUEST());
                        }}
                        title="Check out"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
