import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalFF } from '../../global/globalFF';
import { globalColor } from '../../global/globalcolors';
import GradientBtn from '../../components/GradientBtn';
import { useNavigation } from '@react-navigation/native';

const OffersView = () => {
    let price = 20000;
    let price1 = 19000;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <View style={styles.top_inner_first_container}>
                    <Image
                        source={require('../../image/ETH.png')}
                        style={{ height: 48, width: 48 }}
                    />
                    <View style={{ gap: 5 }}>
                        <View style={styles.price_top_box}>
                            <Text style={styles.price_text_style}>{price.toLocaleString()}</Text>
                            <Image
                                source={require('../../image/web.png')}
                            />
                        </View>
                        <Text style={styles.fxf_text_style}>FxF</Text>
                    </View>
                </View>

                <View style={styles.top_inner_second_container}>
                    <View style={styles.inner_first_second_container}>
                        <Text style={styles.price_text_style}>${price1.toLocaleString()}</Text>
                        <Text style={styles.fxf_text_style}>USDT</Text>
                    </View>
                    <View style={styles.profile_top_container}>
                        <View style={styles.profile_name_container}>
                            <Text style={styles.profile_name_text_style}>R</Text>
                        </View>
                        <View>
                            <Text style={styles.profile_name_text1_style}>Rahul19</Text>
                            <Text style={styles.rating_text_style}>4.5 ★<Text style={{ color: '#ffffff' }}>(52)</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
            <GradientBtn
                loginBtnText={'Deal Now'}
                height={38}
                color={globalColor.text_primary_color}
                onPress={() => navigation.navigate('OrderDetailsConfirmed')}
            />
        </View>
    );
}

export default OffersView

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#2d2d2d',
        marginVertical: 10,
        padding: 5,
    },
    top_container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 5,
    },
    top_inner_first_container: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    price_top_box: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    price_text_style: {
        fontFamily: globalFF.montserrat_b,
        fontSize: 16,
        color: globalColor.text_primary_color,
    },
    fxf_text_style: {
        fontFamily: globalFF.montserrat_r,
        fontSize: 12,
        color: '#6c757d',
    },
    top_inner_second_container: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    inner_first_second_container: {
        gap: 5,
        alignItems: 'flex-end'
    },
    profile_top_container: {
        width: 100,
        height: 45,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#4d4d4d',
        alignItems: "center",
        borderRadius: 6,
        gap: 5
    },
    profile_name_container: {
        height: 27,
        width: 27,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#161616',
        borderRadius: 27,
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
    }
})