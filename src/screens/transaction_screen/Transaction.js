import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientBtn from '../../components/GradientBtn';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';
import { transactiionHaxHandler } from '../util/utils';
import SmallGradientBtn from '../home_screen/SmallGradientBtn';
import SmallNormalBtn from '../home_screen/SmallNormalBtn';

const Transaction = () => {
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
                            <SmallGradientBtn
                                btn_name={'All transactions'}
                                onPress={buyHandler}
                            />
                            <SmallNormalBtn
                                btn_name={'Bonus Only'}
                                onPress={() => sellHandler()}
                            />
                        </>
                        :
                        <>
                            <SmallNormalBtn
                                btn_name={'All transactions'}
                                onPress={() => buyHandler()}
                            />
                            <SmallGradientBtn
                                btn_name={'Bonus Only'}
                                onPress={sellHandler}
                            />
                        </>
                }
            </View>

            {/* // credite code */}
            <View style={styles.credite_top_container}>
                <View style={styles.second_top_container}>
                    <View style={styles.data_container}>
                        <Text style={styles.data_text_style}>11-2-2023 | 7:30 PM</Text>
                        <Text numberOfLines={1} style={styles.name_text_style}>From: <Text style={styles.name2_text_style}>rahulsinghania1997</Text></Text>
                    </View>
                    <Icons name={'caret-forward-outline'} size={20} color={'#2cca04'} style={{ paddingHorizontal: 5 }}
                    />
                    <View style={styles.data_container}>
                        <Text style={styles.data_text_style}>11-2-2023 | 7:30 PM</Text>
                        <Text numberOfLines={1} style={styles.name_text_style}>To: <Text style={styles.name2_text_style}>sumitnarayan21</Text></Text>
                    </View>
                </View>
                <View style={styles.amount_top_container}>
                    <Text style={styles.amount_text_style}>Amount:   </Text>
                    <Text style={styles.price_text_style}>19000</Text>
                    <Text style={styles.fxf_text_style}> fxf</Text>
                </View>
                <Text style={styles.narration_text_style}>Narration:</Text>
                <Text style={styles.transaction_hash_text_style}>Transaction hash: <Text style={styles.transaction_hash2_text_style}>{transactiionHaxHandler('35bSzXvRKL7cVbSzXvRKLRKRKL7cVbSz5bSzXvRK')}</Text></Text>
                <Text style={styles.transaction_explorer_text_style}>View transaction on explorer</Text>
                <View style={styles.credite_text_top_container}>
                    <Text style={styles.credited_text_style}>Credited</Text>
                </View>
            </View>

            {/* // debite code */}
            <View style={styles.debite_top_container}>
                <View style={styles.second_top_container}>
                    <View style={styles.data_container}>
                        <Text style={styles.data_text_style}>11-2-2023 | 7:30 PM</Text>
                        <Text numberOfLines={1} style={styles.name_text_style}>From: <Text style={styles.name2_text_style}>rahulsinghania1997</Text></Text>
                    </View>
                    <Icons name={'caret-forward-outline'} size={20} color={'#C5003B'} style={{ paddingHorizontal: 5 }}
                    />
                    <View style={styles.data_container}>
                        <Text style={styles.data_text_style}>11-2-2023 | 7:30 PM</Text>
                        <Text numberOfLines={1} style={styles.name_text_style}>To: <Text style={styles.name2_text_style}>sumitnarayan21</Text></Text>
                    </View>
                </View>
                <View style={styles.amount_top_container}>
                    <Text style={styles.amount_text_style}>Amount:   </Text>
                    <Text style={styles.price_text_style}>19000</Text>
                    <Text style={styles.fxf_text_style}> fxf</Text>
                </View>
                <Text style={styles.narration_text_style}>Narration:</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.transaction_hash_text_style}>Transaction hash: <Text style={styles.transaction_hash2_text_style}>{transactiionHaxHandler('35bSzXvRKL7cVbSzXvRKLRKRKL7cVbSz5bSzXvRK')}</Text></Text>
                    <TouchableOpacity>
                        <Icon name={'content-copy'} size={18} color={'#fff'} marginTop={5} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.transaction_explorer_text_style}>View transaction on explorer</Text>
                <View style={styles.debite_text_top_container}>
                    <Text style={styles.credited_text_style}>Debited</Text>
                </View>
            </View>
        </View>
    )
}

export default Transaction

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
        paddingHorizontal: 10
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
    credite_top_container: {
        height: 200,
        backgroundColor: '#103300',
        borderRadius: 8,
        marginTop: 20,
        paddingHorizontal: 14,
        paddingVertical: 14,
    },
    second_top_container: {
        flexDirection: 'row',
    },
    data_container: {
        flex: 1,
    },
    data_text_style: {
        fontSize: 9,
        fontWeight: '600',
        fontFamily: globalFF.montserrate_s_b,
        lineHeight: 10,
        color: '#f6f6f6'
    },
    name_text_style: {
        fontSize: 14,
        fontFamily: globalFF.montserrat_r,
        color: '#f6f6f6'
    },
    name2_text_style: {
        fontSize: 12,
        fontFamily: globalFF.montserrate_s_b,
        color: '#F7F7F7',
    },
    amount_top_container: {
        height: 25,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        width: '100%',
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    amount_text_style: {
        fontFamily: globalFF.montserrat_r,
        color: globalColor.text_primary_color,
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '600',
    },
    price_text_style: {
        fontFamily: 'Montserrat-SemiBold',
        color: globalColor.text_primary_color,
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '600',
    },
    fxf_text_style: {
        fontFamily: 'Montserrat-SemiBold',
        color: globalColor.text_primary_color,
        fontSize: 10,
        fontWeight: '600',
    },
    narration_text_style: {
        fontFamily: globalFF.montserrat_r,
        fontSize: 14,
        color: '#F6f6f6'
    },

    transaction_hash_text_style: {
        fontFamily: globalFF.montserrat_r,
        fontSize: 14,
        color: '#F6f6f6',
        // fontWeight: '400',
        // lineHeight: 14,
        marginTop: 10,
        width: 290,
    },
    transaction_hash2_text_style: {
        fontFamily: globalFF.montserrate_s_b,
        fontSize: 13,
        color: '#F6f6f6',
        // fontWeight: '600',
        lineHeight: 17,
    },
    transaction_explorer_text_style: {
        fontFamily: 'Montserrat-SemiBold',

        fontSize: 10,
        fontWeight: '600',
        color: '#6fb6f8',
        lineHeight: 12,
        marginTop: 15
    },
    credited_text_style: {
        fontSize: 10,
        fontFamily: globalFF.montserrat_r,
        fontWeight: '700',
        color: '#fff',

    },
    credite_text_top_container: {
        backgroundColor: '#55ab03',
        width: 59,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        height: 17,
        borderRadius: 20,
        marginTop: -20
        // paddingHorizontal: 5
    },
    debite_text_top_container: {
        backgroundColor: '#C5003B',
        width: 59,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        height: 17,
        borderRadius: 20,
        marginTop: -20
    },
    debite_top_container: {
        height: 200,
        backgroundColor: '#4d0000',
        borderRadius: 8,
        marginTop: 20,
        paddingHorizontal: 14,
        paddingVertical: 14,
    },


})