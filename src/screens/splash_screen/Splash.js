import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { globalColor } from '../../global/globalcolors'
import { globalFF } from '../../global/globalFF'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SplashLoadingHandler, IsLoginHandler, PassCodeHandler, UserTockenHandler, UserTokenHandler } from '../../Redux/Action/AuthReducerAction/AuthReducerAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import { IsWalletConnectedHandler } from '../../Redux/Action/WalletAction/WalletAction';

const Splash = () => {
    const navigation = useNavigation();
    const AuthDispatch = useDispatch();
    useEffect(() => {
        getUserToken();
        setTimeout(() => {
            AuthDispatch(SplashLoadingHandler(false))
        }, 2000);
    }, [])

    const getUserToken = async () => {
        try {
            const res = await RNSecureStorage.exists("userToken")
            const passcode = await RNSecureStorage.exists("passCode")
            if (res) {
                const res = await RNSecureStorage.get("userToken")
                AuthDispatch(UserTokenHandler(res))
            }
            if (passcode) {
                const res = await RNSecureStorage.get("passCode")
                console.log(res);
                AuthDispatch(PassCodeHandler(res))
            }

            const isWallet = await AsyncStorage.getItem('isWalletConnect',);
            console.log(isWallet, 'walletis...>');
            AuthDispatch(IsWalletConnectedHandler(isWallet));

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../../image/fxfort_logo.png')}
                style={styles.logo_style}
            />
            <View style={styles.text_box}>
                <Animatable.Text animation={'slideInLeft'} style={styles.txt_style}>Fx</Animatable.Text>
                <Animatable.Text animation={'slideInUp'} style={styles.txt_style}>Fo</Animatable.Text>
                <Animatable.Text animation={'slideInRight'} style={styles.txt_style}>rt</Animatable.Text>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo_style: {
        height: 137,
        width: 137,
    },
    txt_style: {
        color: globalColor.text_primary_color,
        fontSize: 45,
        alignSelf: 'center',
        fontFamily: globalFF.poppins_bold

    },
    text_box: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }

})