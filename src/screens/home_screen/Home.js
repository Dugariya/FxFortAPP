import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, TextInput, KeyboardAvoidingView, Button } from 'react-native'
import React, { useState, useMemo, memo } from 'react'
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientBtn from '../../components/GradientBtn';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/Ionicons";
import CustomBtn from '../../components/CustomBtn';
import BuySellComponent from '../components/BuySellComponent';
import LinearGradient from 'react-native-linear-gradient';
import { transactiionHaxHandler } from '../util/utils';
import { BtnComponents } from '../components/BtnComponents';
import SmallGradientBtn from './SmallGradientBtn';
import SmallNormalBtn from './SmallNormalBtn';
import { useSelector, useDispatch } from 'react-redux';
import { UserTokenHandler } from '../../Redux/Action/AuthReducerAction/AuthReducerAction';
import * as Animatable from 'react-native-animatable';

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
const Home = () => {
    const [buyBtn, setBuyBtn] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    const [buyCoinText, setbuyCoinText] = useState('')
    const walletReducerData = useSelector((state) => state.MMReducer);
    const AuthDispatch = useDispatch();
    // const [sellBtn, setSellBtn] = useState(false)
    // console.log(props);
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
        AuthDispatch(UserTokenHandler(null))

    }
    // main view 
    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Image
                    source={require('../../image/avtar.png')}
                    style={styles.avtar_img_style}
                />
                <View style={styles.address_top_container}>
                    <Text style={styles.address_title_style}>Address</Text>
                    <Text numberOfLines={1} style={styles.address_text_style} >{transactiionHaxHandler(walletReducerData.metaMaskAddress)}</Text>
                </View>
            </View>
            <Text style={[styles.name_text_style,]}>Hello Jack!</Text>
            <ImageBackground
                source={require('../../image/home_gradient.png')}
                style={styles.img_bg_style}            >
                <View style={styles.current_balance_top_container}>
                    <Text style={styles.current_balance_title_style}>Current Balance</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.current_balance_text_style}>87,730.12</Text>
                        <Text style={styles.up_percentage_text_style}> <Text style={{ fontSize: 20 }}>↑</Text>10.20%</Text>
                    </View>
                </View>
            </ImageBackground>
            <GradientBtn
                loginBtnText={'Buy Coins'}
                color={globalColor.text_primary_color}
                marginTop={15}
                onPress={() => setModalVisible(!modalVisible)}
            />
            {/* <BuyCoinModal /> */}
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
            {/* // buy coin modal view */}
            {modalVisible &&
                <View style={[styles.buy_coin_top_container, {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }]}>
                    <Animatable.View animation={'zoomInUp'} style={styles.buy_coin_top1_container}>
                        <View style={styles.modal_top_container}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                                style={styles.close_btn_top_container} >
                                <Icons name={'close-outline'} size={20} color={'#F02E5D'} />
                            </TouchableOpacity>
                            <TextInput
                                placeholder='No of fxf Tokens'
                                placeholderTextColor={'#909090'}
                                value={buyCoinText}
                                onChangeText={(e) => setbuyCoinText(e)}
                                keyboardType={'number-pad'}
                                style={{
                                    width: '70%',
                                    color: '#000',

                                    height: 35,
                                    fontSize: 14,
                                }}
                            />
                            <Text style={styles.text_input_right_text_style}>{buyCoinText} USDT</Text>
                        </View>

                        <Text style={styles.no_of_bonus_text_style}>No. of bonus coins</Text>
                        <View style={styles.bottom_text_top_container} >
                            <Text style={{ color: '#909090' }}>{buyCoinText}fxf + {buyCoinText * 20 / 100}fxf</Text>
                        </View>
                        <GradientBtn
                            loginBtnText={'Buy Coins'}
                            onPress={() => setModalVisible(!modalVisible)}
                            height={45}
                        />
                    </Animatable.View>
                </View>
            }
        </View>
    )
}

export default memo(Home)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        paddingHorizontal: 25,

    },
    top_container: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: "center",
    },
    avtar_img_style: {
        height: 62,
        width: 66,
    },
    address_top_container: {
        marginLeft: 20,
        width: '75%'
    },
    address_title_style: {
        color: globalColor.text_gray_color,
        fontSize: 14,
        fontFamily: globalFF.montserrat_r,
        fontWeight: 600,
    },
    address_text_style: {
        color: globalColor.text_primary_color,
        fontSize: 16,
        fontFamily: globalFF.montserrat_r,
        fontWeight: 600,
        marginTop: 5,
    },
    name_text_style: {
        fontSize: 40,
        fontFamily: globalFF.montserrat_r,
        fontWeight: 700,
        color: globalColor.text_primary_color,
        width: 349,
        height: 40,
        lineHeight: 40,
        marginTop: 25
    },
    img_bg_style: {
        height: 82,
        width: '100%',
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    current_balance_top_container:
    {
        height: '95%',
        width: '98%',
        alignSelf: 'center',
        backgroundColor: '#ffffff31',
        marginVertical: 1,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    current_balance_text_style:
    {
        color: globalColor.text_secondary_color,
        fontWeight: '700',
        fontFamily: globalFF.montserrat_r,
        fontSize: 36,
        lineHeight: 43, marginTop: 5
    },
    current_balance_title_style:
    {
        fontFamily: globalFF.montserrat_r,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: '#161616',
    },
    receive_top_box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_top_box: {
        height: 46,
        width: 46,
        backgroundColor: '#1a1a1a',
        borderRadius: 50,
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_text_style: {
        alignSelf: 'center',
        fontFamily: globalFF.montserrat_r,
        fontSize: 14,
        color: globalColor.text_gray_color,
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
    up_percentage_text_style: {
        color: '#2cca04',
        fontWeight: '700',
        paddingLeft: 30,
        marginTop: 15
    },
    buy_coin_top_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    buy_coin_top1_container: {
        backgroundColor: '#fff',
        width: '100%',
        height: 220,
        borderRadius: 10,
        padding: 20,
        paddingTop: 30,


    },
    modal_top_container: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderBottomWidth: 1,
        borderBottomColor: '#b4b4b4',
        paddingHorizontal: 10,
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    close_btn_top_container: {
        height: 25,
        width: 25,
        borderRadius: 25,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#000000a4',
        position: 'absolute',
        right: -15,
        top: -25
    },
    text_input_right_text_style:
    {
        color: '#161616',
        fontSize: 10,
        fontFamily: globalFF.montserrat_r,
    },
    no_of_bonus_text_style:
    {
        fontSize: 10,
        fontFamily: globalFF.montserrat_r,
        color: '#000',
        marginTop: 10,
    },
    bottom_text_top_container: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.03)',
        height: 35,
        paddingHorizontal: 10,
        marginTop: 5,
        justifyContent: 'center'
    }

})