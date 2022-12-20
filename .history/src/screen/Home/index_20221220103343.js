import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
    decrement,
    increment,
} from '../../store/redux/reducers/burger.reducer';
import { imgBuger } from '../../assets/images';
import { styles } from './style';
export default function Home() {
    //Get Data from store
    const getCart = useSelector((state) => state.burger.burger);
    console.log(getCart);

    const dispatch = useDispatch();
    // const nagigation = useNavigation();
    const [salad, setSalad] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
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
                                <View style={styles.buttonCount}>
                                    <Text
                                        style={styles.textButton}
                                        onPress={() =>
                                            dispatch(decrement('salad'))
                                        }
                                    >
                                        -
                                    </Text>
                                </View>
                                <Text valu style={styles.countShow}>
                                    {getCart}
                                </Text>
                                <View style={styles.buttonCount}>
                                    <Text
                                        style={styles.textButton}
                                        // onPress={() =>
                                        //     dispatch(increment('salad'))
                                        // }
                                    >
                                        +
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* BACON */}
                        <View style={styles.rowIng}>
                            <Text style={styles.label}> Bacon</Text>
                            <View style={styles.buttonWrapper}>
                                <View style={styles.buttonCount}>
                                    <Text
                                        style={styles.textButton}
                                        // onPress={() =>
                                        //     dispatch(decrement('bacon'))
                                        // }
                                        // disabled={(getCart.salad = 0)}
                                    >
                                        -
                                    </Text>
                                </View>
                                {/* <Text style={styles.countShow}>
                                    {getCart.bacon}
                                </Text> */}
                                <View style={styles.buttonCount}>
                                    <Text
                                        style={styles.textButton}
                                        // onPress={() =>
                                        //     dispatch(increment('bacon'))
                                        // }
                                    >
                                        +
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* CHEESE */}
                        <View style={styles.rowIng}>
                            <Text style={styles.label}> Cheese</Text>
                            <View style={styles.buttonWrapper}>
                                <View style={styles.buttonCount}>
                                    <Text
                                        style={styles.textButton}
                                        // onPress={() =>
                                        //     dispatch(decrement('cheese'))
                                        // }
                                    >
                                        -
                                    </Text>
                                </View>
                                {/* <Text style={styles.countShow}>
                                    {getCart.cheese}
                                </Text> */}
                                <View style={styles.buttonCount}>
                                    <Text
                                        style={styles.textButton}
                                        // onPress={() =>
                                        //     dispatch(increment('cheese'))
                                        // }
                                    >
                                        +
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* MEAT */}
                        <View style={styles.rowIng}>
                            <Text style={styles.label}> Meat</Text>
                            <View style={styles.buttonWrapper}>
                                <View style={styles.buttonCount}>
                                    <Text
                                        style={styles.textButton}
                                        // onPress={() =>
                                        //     dispatch(decrement('meat'))
                                        // }
                                    >
                                        -
                                    </Text>
                                </View>
                                {/* <Text style={styles.countShow}>
                                    {getCart.meat}
                                </Text> */}
                                <View style={styles.buttonCount}>
                                    <Text
                                        style={styles.textButton}
                                        // onPress={() =>
                                        //     dispatch(increment('meat'))
                                        // }
                                    >
                                        +
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* <Text> {getTotalPrice}</Text> */}
                </View>
                {/* Checkout Button */}
                <View style={styles.buttonCheckout}>
                    <Button
                        // onPress={() => nagigation.navigate('Order')}
                        title="Check out"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
