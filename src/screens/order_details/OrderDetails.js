import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../global/globalStyle'
import OrderHeader from '../create_order_screen/OrderHeader';
import { globalFF } from '../../global/globalFF';
import OffersView from './OffersView';

const data = [1, 2, 3, 4]
const OrderDetails = () => {
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
            <FlatList
                data={data}
                renderItem={() => <OffersView />}
            />
        </View>
    )
}

export default OrderDetails

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
    },
    number_of_offer_text_count_style: {
        fontFamily: globalFF.montserrate_s_b,
        fontSize: 20,
        color: '#7abfff',
    }

})