import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientBtn from '../../components/GradientBtn';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/Ionicons";
import BuySellComponent from '../components/BuySellComponent';
import LinearGradient from 'react-native-linear-gradient';
import SmallGradientBtn from '../home_screen/SmallGradientBtn';
import SmallNormalBtn from '../home_screen/SmallNormalBtn';
import CustomBtn from '../../components/CustomBtn';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();
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
    const createOrderHandler = () => {
        navigation.navigate('CreateOrder');
    }
    return (
        <View style={styles.container}>
            <CustomBtn
                btnText={'+ Create New Order'}
                bgColor={globalColor.bg_secondary_color}
                color={globalColor.text_secondary_color}
                marginTop={25}
                onPress={createOrderHandler}
            />
            <View style={styles.buy_sell_top_container}>
                {
                    buyBtn ?
                        <>
                            <SmallGradientBtn
                                btn_name={'Buy'}
                                onPress={buyHandler}
                            />
                            <SmallNormalBtn
                                btn_name={'Sell'}
                                onPress={() => sellHandler()}
                            />
                        </>

                        :
                        <>
                            <SmallNormalBtn
                                btn_name={'Buy'}
                                onPress={() => buyHandler()}
                            />
                            <SmallGradientBtn
                                btn_name={'Sell'}
                                onPress={sellHandler}
                            />


                        </>
                }

            </View>
            <FlatList
                data={data}
                initialNumToRender={10}
                renderItem={({ item, index }) => {
                    return (
                        <BuySellComponent index={index} />
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