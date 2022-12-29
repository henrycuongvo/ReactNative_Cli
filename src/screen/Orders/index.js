import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import StatusBar from '../../components/StatusBar';
import { styles } from './style';

import { GET_PRODUCT_LIST_REQUEST } from '../../store/redux/reducers/product.reducer';

export default function Orders() {
    const dispatch = useDispatch();
    //GET Data from store
    const cart = useSelector((state) => state.products.productList.data);
    const data = cart;
    useEffect(() => {
        dispatch(GET_PRODUCT_LIST_REQUEST());
    }, [dispatch]);

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
    const renderItem = ({ item, index }) => {
        const nameItem = cart.length !== 0 ? Object.keys(cart[0]?.cart) : [];
        const prireFilter = nameItem?.filter((e) => {
            if (e !== 'price') {
                return true;
            }
        });
        return (
            <View key={index} style={styles.table}>
                <View style={styles.ingredients}>
                    {prireFilter?.map((name) => {
                        return (
                            <>
                                <View style={styles.ingredientWrapper}>
                                    <Text>{name}</Text>
                                    <Text>{item.cart[name]}</Text>
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

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar title="Orders" />
            <FlatList
                style={styles.scrollView}
                data={data}
                keyExtractor={(item) => item}
                renderItem={renderItem}
                initialNumToRender={5}
                ListFooterComponent={renderFooter}
                removeClippedSubviews={true}

                // onEndReached={ }2
                // onEndReachedThreshold = {}
            />
        </SafeAreaView>
    );
}

// export default function Orders() {
//     const cart = useSelector((state) => state.products.productList.data);
//     const nameItem = cart.length !== 0 ? Object.keys(cart[0]?.cart) : [];
//     const prireFilter = nameItem?.filter((e) => {
//         if (e !== 'price') {
//             return true;
//         }
//     });

//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar title="Orders" />
//             <ScrollView style={styles.scrollView}>
//                 {cart.map((item, index) => {
//                     return (
//                         <View key={index} style={styles.table}>
//                             <View style={styles.ingredients}>
//                                 {prireFilter?.map((name) => {
//                                     return (
//                                         <>
//                                             <View
//                                                 style={styles.ingredientWrapper}
//                                             >
//                                                 <Text>{name}</Text>
//                                                 <Text>{item.cart[name]}</Text>
//                                             </View>
//                                         </>
//                                     );
//                                 })}
//                                 <View style={styles.price}>
//                                     <Text style={{ fontSize: 17 }}> Price</Text>
//                                     <Text style={{ fontSize: 17 }}>
//                                         ${item.cart.price}
//                                     </Text>
//                                 </View>
//                             </View>
//                         </View>
//                     );
//                 })}
//             </ScrollView>
//         </SafeAreaView>
//     );
// }
