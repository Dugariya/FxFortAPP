import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientBtn from '../../components/GradientBtn';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../../components/GradientText';

const GetStart = () => {

    const navigation = useNavigation();

    const getStartHandler = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Image
                    source={require('../../image/fxfort_logo.png')}
                    style={styles.top_logo_style}
                />
                <GradientText style={styles.top_text_style}>Fx</GradientText>
                <Text style={styles.top_text_style}>Fort</Text>
            </View>
            <ImageBackground
                source={require('../../image/line_group.png')}
                style={styles.line_bg_style}
            >
                <Image
                    source={require('../../image/get_start_shape1.png')}
                    style={styles.shape1_bg_style}
                />
            </ImageBackground>

            <View style={styles.bottom_view}>
                <Text style={styles.bottom_text_style}>Jump start your crypto portfolio</Text>
                <Text style={styles.bottom_text2_style}>Take your investment portfolio to next level</Text>
            </View>
            <View style={styles.btn_bottom_container}>
                <GradientBtn
                    loginBtnText={'Get Started'}
                    color={globalColor.text_primary_color}
                    onPress={getStartHandler}
                />
            </View>
        </View>
    )
}

export default GetStart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
    },
    top_container: {
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingLeft: 35,
        paddingTop: 40,
    },
    top_logo_style: {
        height: 68,
        width: 68,
        marginRight: 16
    },
    top_text_style: {
        fontFamily: globalFF.montserrat_bold,
        color: globalColor.text_primary_color,
        fontSize: 45,
    },
    bottom_view: {
        marginTop: -120,
        paddingHorizontal: 35,
    },
    bottom_text_style: {
        width: 327,
        color: globalColor.text_primary_color,
        fontFamily: globalFF.montserrate_s_b,
        fontWeight: '600',
        fontSize: 32,
        lineHeight: 36,

    },
    bottom_text2_style: {
        width: 240,
        color: globalColor.text_primary_color,
        fontFamily: globalFF.montserrate_m,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        marginTop: 15
    },
    btn_bottom_container: {
        paddingHorizontal: 35,
        paddingVertical: 20
    },
    line_bg_style: {
        width: '100%',
        height: '75%',
        marginTop: -50,
        alignItems: 'center',
    },
    shape1_bg_style: {
        height: 350,
        width: 350,
        alignItems: 'center',
        marginTop: 100
    }
})