import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../global/globalStyle'
import OrderHeader from '../create_order_screen/OrderHeader';
import { globalFF } from '../../global/globalFF';
import OffersView from './OffersView';
import { globalColor } from '../../global/globalcolors';
import CustomBtn from '../../components/CustomBtn';
import { Rating, AirbnbRating } from 'react-native-ratings';

const OrderDetailsConfirmed = () => {
    let price = 20000;
    let price1 = 19000;
    return (
        <View style={globalStyle.container}>
            <OrderHeader name={'Order Details'} />
            <Text style={styles.buy_order_text_style}>Buy Order: <Text style={styles.online_text_style}>Online</Text></Text>
            <View style={styles.price_top_box_style}>
                <Text style={styles.price_text_style}>{price.toLocaleString()}<Text style={styles.fxf_text_style}>FxF</Text></Text>
                <Text style={styles.online_text_style}>@</Text>
                <Text style={styles.price_text_style}>{price1.toLocaleString()}<Text style={styles.fxf_text_style}>USDT</Text></Text>
            </View>

            <Text style={styles.number_of_offer_text_style}>Total No. of offers: <Text style={styles.number_of_offer_text_count_style}>04</Text></Text>

            <View style={styles.seller_offer_container}>
                <Text style={styles.seller_offer_text_style}>Seller Offer</Text>
                <View style={styles.seller_top_container}>
                    <View style={styles.seller_top_inner1_container}>
                        <View style={styles.profile_name_container}>
                            <Text style={styles.profile_name_text_style}>R</Text>
                        </View>
                        <Text style={styles.profile_name_text1_style}>rahul19</Text>
                    </View>
                    <View style={styles.seller_top_inner2_container}>
                        <Text style={styles.rating_text_style}>4.5 &#9733; &#9733; &#9733; <Text style={{ color: '#ffffff' }}>(52)</Text></Text>
                    </View>
                </View>
                <View style={styles.price_top_box2_style}>
                    <Text style={styles.price_text_style}>{price.toLocaleString()}<Text style={styles.fxf_text_style}>FxF</Text></Text>
                    <Text style={styles.online_text_style}>@</Text>
                    <Text style={styles.price_text_style}>{price1.toLocaleString()}<Text style={styles.fxf_text_style}>USDT</Text></Text>
                </View>
            </View>

            <CustomBtn
                btnText={'Waiting for the seller to accept deal'}
                bgColor={'#fff'}
                color={'#000000'}
                height={38}
            />
        </View>
    )
}

export default OrderDetailsConfirmed

const styles = StyleSheet.create({
    buy_order_text_style: {
        fontFamily: globalFF.montserrate_s_b,
        fontSize: 20,
        color: '#ffffff'
    },
    online_text_style: {
        fontFamily: globalFF.montserrat_r,
        fontSize: 20,
        color: '#7abfff'
    },
    price_top_box_style: {
        height: 48,
        width: '100%',
        backgroundColor: '#2d2d2d',
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price_top_box2_style: {
        width: '100%',
        backgroundColor: '#2d2d2d',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    price_text_style: {
        fontFamily: globalFF.poppins_s_b,
        fontSize: 20,
        color: '#ffffff'
    },
    fxf_text_style: {
        fontFamily: globalFF.poppins_r,
        fontSize: 10,
        color: '#ffffff'
    },
    number_of_offer_text_style: {
        fontFamily: globalFF.montserrat_r,
        fontSize: 20,
        color: '#ffffff',
        marginBottom: 10,
    },
    number_of_offer_text_count_style: {
        fontFamily: globalFF.montserrate_s_b,
        fontSize: 20,
        color: '#7abfff',
    },
    seller_offer_container: {
        width: '100%',
        padding: 15,
        backgroundColor: '#2d2d2d',
        marginVertical: 10,
    },
    seller_offer_text_style: {
        alignSelf: 'center',
        fontFamily: globalFF.montserrat_r,
        fontSize: 14,
        color: globalColor.text_primary_color
    },
    seller_top_container: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: '100%',
        borderRadius: 6,
        marginVertical: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        alignItems: 'center',
        paddingVertical: 5,
    },
    profile_name_container: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#161616',
        borderRadius: 25,
    },
    profile_name_text_style: {
        color: '#fff'
    },
    profile_name_text1_style: {
        fontFamily: globalFF.montserrat_r,
        fontSize: 14,
        color: globalColor.text_primary_color
    },
    rating_text_style: {
        fontSize: 12,
        color: '#ffc531',
        fontFamily: globalFF.montserrat_r,
    },
    seller_top_inner1_container: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5,
    },
    seller_top_inner2_container: {
        flexDirection: 'row',
        alignItems: 'center'
    }

})