import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalColor } from '../../global/globalcolors'
import { globalFF } from '../../global/globalFF'
import GradientText from '../../components/GradientText'
import CustomBtn from '../../components/CustomBtn'
import GradientBtn from '../../components/GradientBtn';
import { useNavigation } from '@react-navigation/native';

const ConnectWallet = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <View style={styles.top_container}>
                    <Image
                        source={require('../../image/fxfort_logo.png')}
                        style={styles.top_logo_style}
                    />
                    <GradientText style={styles.top_text_style}>Fx</GradientText>
                    <Text style={styles.top_text_style}>Fort</Text>
                </View>
                <Text style={styles.title_text_style}>Connect your wallet</Text>
                <CustomBtn
                    bgColor={globalColor.bg_secondary_color}
                    btnText={'Connect with Metamask'}
                    color={globalColor.text_secondary_color}
                    marginTop={50}
                    img2
                    onPress={() => navigation.navigate('BottomTab')}
                />
                <GradientBtn
                    loginBtnText={'Connect with other wallets'}
                    color={globalColor.text_primary_color}
                    marginTop={30}
                // onPress={() => loginHandler()}
                />




            </View>
            <View style={styles.bg_img_top_container}>
                <ImageBackground
                    source={require('../../image/line_group.png')}
                    style={styles.line_bg_style}
                >
                    <Image
                        source={require('../../image/get_start_shape1.png')}
                        style={styles.shape1_bg_style}
                    />

                </ImageBackground>

            </View>
        </>

    )
}

export default ConnectWallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        paddingHorizontal: 25,
    },
    top_container: {
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingTop: 45,
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
    title_text_style: {
        width: 200,
        fontFamily: globalFF.montserrat_r,
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 40,
        color: globalColor.text_primary_color,
        marginTop: 20
    },
    line_bg_style: {
        width: '100%',
        height: '100%',
    },
    shape1_bg_style: {
        height: 440,
        width: 440,
        alignItems: 'center',
        position: 'absolute',
        bottom: -120,
        right: -130,

    },
    bg_img_top_container: {
        position: 'absolute',
        height: '50%',
        width: '100%',
        bottom: 0,

    }
})
