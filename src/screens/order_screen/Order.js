import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientBtn from '../../components/GradientBtn';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/Ionicons";
import BuySellComponent from '../components/BuySellComponent';
import LinearGradient from 'react-native-linear-gradient';

const data = [
    {
        "id": "78",
        "name": "Bitcoin",
        "decimal": "2",
        "symbol": "BTC"
    },
    {
        "id": "79",
        "name": "Ethereum",
        "decimal": "2",
        "symbol": "ETH"
    },
    {
        "id": "80",
        "name": "XRP",
        "decimal": "5",
        "symbol": "XRP"
    },
    {
        "id": "81",
        "name": "Litecoin",
        "decimal": "2",
        "symbol": "LTC"
    },
    {
        "id": "82",
        "name": "Ethereum",
        "decimal": "3",
        "symbol": "ETC"
    }
]

const Order = () => {
    const [buyBtn, setBuyBtn] = useState(true)
    const buyHandler = () => {
        if (!buyBtn) {
            setBuyBtn(!buyBtn)
        }
        // setSellBtn(!sellBtn)
    }
    const sellHandler = () => {
        if (buyBtn) {
            setBuyBtn(!buyBtn)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.buy_sell_top_container}>
                {
                    buyBtn ?
                        <>
                            <LinearGradient
                                style={styles.sell_btn_box_style}
                                colors={[globalColor.linear_g_fc, globalColor.linear_g_sc]}
                                start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
                                locations={[0, 0.8]}
                                // angle={45}
                                angleCenter={{ x: 0.2, y: 0.2 }}
                            >
                                <TouchableOpacity onPress={buyHandler}>
                                    <Text style={styles.sell_btn_text_style}>Buy</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            {/* </TouchableOpacity> */}


                            <TouchableOpacity
                                onPress={() => sellHandler()}
                                style={styles.sell_btn_box_style}>
                                <Text style={styles.sell_btn_text_style}>Sell</Text>
                            </TouchableOpacity>
                        </>

                        :
                        <>

                            <TouchableOpacity
                                onPress={buyHandler}
                                style={styles.sell_btn_box_style}>
                                <Text style={styles.sell_btn_text_style}>Buy</Text>
                            </TouchableOpacity>
                            <LinearGradient
                                style={styles.sell_btn_box_style}
                                colors={[globalColor.linear_g_fc, globalColor.linear_g_sc]}
                                start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
                                locations={[0, 0.8]}
                                // angle={45}
                                angleCenter={{ x: 0.2, y: 0.2 }}
                            >
                                <TouchableOpacity onPress={sellHandler}>
                                    <Text style={styles.sell_btn_text_style}>Sell</Text>
                                </TouchableOpacity>
                            </LinearGradient>

                        </>
                }

            </View>
            <FlatList
                data={data}
                initialNumToRender={10}
                renderItem={({ item, index }) => {
                    return (
                        <BuySellComponent />
                    );
                }}
            />
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        paddingHorizontal: 25,
    },
    buy_sell_top_container: {
        backgroundColor: '#2d2d2d',
        height: 50,
        marginTop: 20,
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    sell_btn_text_style: {
        color: globalColor.text_primary_color,
        fontFamily: globalFF.montserrate_s_b,
        fontSize: 16,
    },
    sell_btn_box_style: {
        width: '48%',
        marginHorizontal: 0,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#fff'
    },

})