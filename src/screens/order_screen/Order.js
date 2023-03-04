import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientBtn from '../../components/GradientBtn';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/Ionicons";

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
                            <GradientBtn
                                loginBtnText={'Buy'}
                                width={'90%'}
                                height={35}
                                color={globalColor.text_primary_color}
                                paddingHorizontal={0}
                                onPress={() => buyHandler()}
                            />
                            <TouchableOpacity
                                onPress={() => sellHandler()}
                                style={styles.sell_btn_box_style}>
                                <Text style={styles.sell_btn_text_style}>Sell</Text>
                            </TouchableOpacity>
                        </>

                        :
                        <>
                            <TouchableOpacity
                                onPress={() => buyHandler()}
                                style={styles.sell_btn_box_style}>
                                <Text style={styles.sell_btn_text_style}>Buy</Text>
                            </TouchableOpacity>
                            <GradientBtn
                                onPress={() => sellHandler()}
                                loginBtnText={'Sell'}
                                width={'90%'}
                                height={35}
                                color={globalColor.text_primary_color}
                                paddingHorizontal={0}

                            />
                        </>
                }

            </View>
            <FlatList
                data={data}
                initialNumToRender={10}
                renderItem={({ item, index }) => {
                    return (
                        <View key={index} style={styles.bottom_currency_top_container}>
                            <View
                                style={styles.currency_icon_top_box}  >
                                <Icons name={'logo-bitcoin'} size={22} color={globalColor.text_primary_color}
                                />
                            </View>
                            <View style={{ marginLeft: 15, width: 80 }}>
                                <Text style={styles.currency_text_style}>{item.name}</Text>
                                <Text style={styles.currency_symbol_name_style}>{item.symbol}</Text>
                            </View>
                            <Image
                                source={require('../../image/graph_up.png')}
                                style={styles.graph_img_style}
                            />
                            <View style={{ marginLeft: 25 }}>
                                <Text style={styles.currency_price_text_style}>$503.12</Text>
                                <Text style={styles.currency_price_bottom_text}>50 ETH</Text>
                            </View>
                        </View>
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
        fontFamily: globalFF.montserrat_r,
        fontSize: 16,
    },
    sell_btn_box_style: {
        width: '50%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#fff'
    },
    bottom_currency_top_container: {
        height: 50,
        // backgroundColor: '#ffffff28',
        width: '100%',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

    },
    currency_icon_top_box: {
        height: 45,
        width: 45,
        borderRadius: 5,
        backgroundColor: '#212125',
        justifyContent: 'center',
        alignItems: 'center',
    },
    currency_text_style: {
        fontSize: 16,
        fontFamily: globalFF.montserrat_r,
        fontWeight: '700',
        color: globalColor.text_primary_color
    },
    currency_symbol_name_style: {
        fontSize: 14,
        fontFamily: globalFF.montserrat_r,
        fontWeight: '400',
        color: globalColor.text_gray_color,
        marginTop: 4
    },
    currency_price_text_style: {
        fontFamily: globalFF.montserrat_r,
        fontWeight: '700',
        fontSize: 16,
        color: globalColor.text_primary_color
    },
    currency_price_bottom_text: {
        fontFamily: globalFF.montserrat_r,
        fontWeight: '700',
        fontSize: 10,
        color: globalColor.text_gray_color,
        marginTop: 4
    },
    graph_img_style: {
        height: 28,
        width: 65,
        marginHorizontal: 15
    }
})