import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { globalStyle } from '../../global/globalStyle';
import OrderHeader from './OrderHeader';
import { globalColor } from '../../global/globalcolors';
import SmallGradientBtn from '../home_screen/SmallGradientBtn';
import SmallNormalBtn from '../home_screen/SmallNormalBtn';
import { globalFF } from '../../global/globalFF';
import CustomTextInput from '../../components/CustomTextInput';
import GradientBtn from '../../components/GradientBtn';
import RangeSlider from 'rn-range-slider';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('screen');
const CreateOrder = () => {
    const [online, setonline] = useState(true)
    const navigation = useNavigation();
    const onlineHandler = () => {
        if (!online) {
            setonline(!online)
        }
    }
    const offlineHandler = () => {
        if (online) {
            setonline(!online)
        }
    }
    return (
        <View style={globalStyle.container}>
            <OrderHeader name={'Create your Order'} />
            <ScrollView showsVerticalScrollIndicator={false}
            >
                <View style={styles.order_type_top_box}>
                    <Text style={styles.order_type_text_style}>Order Type</Text>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <SmallGradientBtn
                            btn_name={'BUY'}
                            width={100}
                            borderRadius={50}
                            height={35}
                            onPress={() => console.log('hello')}
                        />
                        <SmallNormalBtn
                            btn_name={'SELL'}
                            width={100}
                            borderRadius={50}
                            backgroundColor={'#2d2d2d'}
                            height={35}
                            onPress={() => console.log('hello')}
                        />
                    </View>
                </View>
                <View style={styles.input_field_top_box}>

                    <CustomTextInput
                        top_text={'IRA Token'}
                        placeholder_text={'31535'}
                        close={false}
                    />
                    <CustomTextInput
                        top_text={'Proposed USDT'}
                        placeholder_text={'$1800'}
                        close={false}
                    />
                </View>

                <View style={styles.order_type_top_box}>
                    <Text style={styles.order_type_text_style}>Order Mode</Text>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        {
                            online ?
                                <>
                                    <SmallGradientBtn
                                        btn_name={'Online'}
                                        width={100}
                                        borderRadius={50}
                                        height={35}
                                        onPress={() => onlineHandler()}
                                    />
                                    <SmallNormalBtn
                                        btn_name={'Offline'}
                                        width={100}
                                        borderRadius={50}
                                        backgroundColor={'#2d2d2d'}
                                        height={35}
                                        onPress={() => offlineHandler()}
                                    />
                                </>
                                :
                                <>
                                    <SmallNormalBtn
                                        btn_name={'Online'}
                                        width={100}
                                        borderRadius={50}
                                        backgroundColor={'#2d2d2d'}
                                        height={35}
                                        onPress={() => onlineHandler()}

                                    />
                                    <SmallGradientBtn
                                        btn_name={'Offline'}
                                        width={100}
                                        borderRadius={50}
                                        height={35}
                                        onPress={() => offlineHandler()}

                                    />
                                </>
                        }
                    </View>
                </View>
                {/* offline code  */}
                {
                    !online &&
                    <>
                        <View style={styles.offline_top_container}>
                            <Text style={styles.location_text_style}>Location</Text>
                            <Text style={styles.location_text_style}>Location</Text>
                        </View>
                        <Text style={styles.location_text_style}>Distance from current location</Text>
                        <Slider
                            style={styles.slide_style}
                            minimumValue={1}
                            maximumValue={100}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#ffffff"
                            // thumbImage={require('../../image/slider_thumb_image.png')}
                            // thumbImage={(require('../../image/avtar.png'))}
                            thumbTintColor='#2424FE'
                            lowerLimit={1}
                            upperLimit={100}
                            value={1}
                            step={5}
                            onValueChange={(e) => {
                                console.log(e);
                            }}

                        />
                        <View style={styles.meter_top_container}>
                            <Text style={styles.meter_text_style}>1 meter</Text>
                            <Text style={styles.meter_text_style}>100 meter</Text>
                        </View>
                    </>

                }

                <GradientBtn
                    loginBtnText={'Create Order'}
                    color={globalColor.text_primary_color}
                    height={38}
                    marginTop={40}
                    onPress={() => navigation.navigate('OrderDetails')}
                />

            </ScrollView>
        </View>
    )
}

export default CreateOrder

const styles = StyleSheet.create({
    order_type_text_style: {
        color: globalColor.bg_secondary_color,
        fontFamily: globalFF.montserrate_s_b,
        fontSize: 16,
    },
    order_type_top_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    input_field_top_box: {
        marginTop: 20
    },
    offline_top_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30,
    },
    location_text_style: {
        color: globalColor.bg_secondary_color,
        fontFamily: globalFF.montserrate_s_b,
        fontSize: 16,

    },
    slide_style: {
        width: width * .93,
        height: 40,
        alignSelf: 'center',
    },
    meter_top_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    meter_text_style: {
        color: globalColor.text_gray_color,
        fontFamily: globalFF.montserrate_s_b,
        fontSize: 16,
    },
})