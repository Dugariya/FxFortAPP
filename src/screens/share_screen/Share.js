import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalColor } from '../../global/globalcolors';
import GradientBtn from '../../components/GradientBtn';
import { globalFF } from '../../global/globalFF';

const Share = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.share_now_text_style}>Share Now</Text>
            <ImageBackground
                source={require('../../image/home_gradient.png')}
                style={styles.img_bg_style}            >
                <View style={styles.current_balance_top_container}>
                    <Text style={styles.current_balance_title_style}>Current Balance</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.current_balance_text_style}>$87,730.12</Text>
                        <Text style={styles.up_percentage_text_style}> <Text style={{ fontSize: 20 }}>&#8593;</Text>10.20%</Text>
                    </View>
                </View>
            </ImageBackground>
            <GradientBtn
                loginBtnText={'Share'}
                color={globalColor.text_primary_color}
                marginTop={15}
            />
        </View>
    )
}

export default Share

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        paddingHorizontal: 25,
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
    share_now_text_style: {
        fontFamily: globalFF.montserrat_r,
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 40,
        color: globalColor.text_primary_color,
        marginTop: 50,
    },
    up_percentage_text_style: {
        color: '#2cca04',
        fontWeight: '700',
        paddingLeft: 30,
        marginTop: 15
    }
})