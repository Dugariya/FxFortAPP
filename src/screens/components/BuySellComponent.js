import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalFF } from '../../global/globalFF';
import { globalColor } from '../../global/globalcolors';

const BuySellComponent = ({ index }) => {
    return (
        <View style={styles.bottom_currency_top_container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.currency_icon_top_box}  >
                    <Image
                        source={require('../../image/Icon.png')}
                        style={{ height: '100%', width: '100%' }}
                    />
                </View>
                <View style={{ marginLeft: 15, width: 80 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={styles.currency_text_style}>{'20,000'}</Text>
                        {true && (index % 3 != 0) ?
                            <Image
                                source={require('../../image/web.png')}
                                style={styles.online_offile_image_style}
                            /> :
                            <Image
                                source={require('../../image/money.png')}
                                style={styles.online_offile_image_style}
                            />
                        }
                    </View>
                    <Text style={styles.currency_symbol_name_style}>FxF</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={{ marginLeft: 13 }}>
                    <Text style={styles.currency_price_text_style}>$18,000</Text>
                    <Text style={styles.currency_price_bottom_text}>USDT</Text>
                </View>
                <View style={styles.name_top_container}>
                    <View
                        style={styles.sort_name_container_style}>
                        <Text style={styles.sort_name_text_style}>R</Text>
                    </View>
                    <View>
                        <Text style={styles.name_text_style}>Rahul19</Text>
                        <Text style={styles.start_text_style}>4.5 ★<Text style={[styles.start_text_style, { color: '#fff' }]}> (52)</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default BuySellComponent

const styles = StyleSheet.create({
    bottom_currency_top_container: {
        height: 50,
        // backgroundColor: '#ffffff28',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginTop: 4,
        alignSelf: 'flex-end'
    },
    graph_img_style: {
        height: 28,
        width: 65,
        marginHorizontal: 15
    },
    up_percentage_text_style: {
        color: '#2cca04',
        fontWeight: '700',
        paddingLeft: 30,
        marginTop: 15
    },
    online_offile_image_style: {
        height: 16,
        width: 16,
        marginLeft: 5
    },
    sort_name_container_style: {
        backgroundColor: '#000',
        height: 27,
        width: 27,
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
    },
    name_top_container: {
        marginLeft: 10,
        width: 100,
        height: 45,
        backgroundColor: '#2d2d2d',
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 2
    },
    name_text_style: {
        color: '#fff',
        fontSize: 14,
        fontFamily: globalFF.montserrat_r,
    },
    start_text_style: {
        color: '#ffc531',
        fontSize: 12,
        fontFamily: globalFF.montserrat_r
    },
    sort_name_text_style: {
        color: '#fff',
        fontSize: 16,
    }
})