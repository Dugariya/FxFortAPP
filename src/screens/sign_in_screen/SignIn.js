import { Image, StyleSheet, Text, View, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientText from '../../components/GradientText';
import CustomTextInput from '../../components/CustomTextInput';
import GradientBtn from '../../components/GradientBtn';
import { useNavigation } from '@react-navigation/native';
import CustomGradientText from '../../components/CustomGradientText';
import CustomBtn from '../../components/CustomBtn';
import { CustomLinearGBorderBtn } from '../../components/CustomLinearGBorderBtn';
import { useDispatch } from 'react-redux';
import { IsLoginHandler } from '../../Redux/Action/AuthReducerAction/AuthReducerAction';
import AsyncStorage from "@react-native-async-storage/async-storage";
const SignIn = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const AuthDispatch = useDispatch();

    const loginHandler = () => {
        // AuthDispatch(IsLoginHandler(true));
        // navigation.navigate('ConnectWallet')
        storeTokenData();
    }
    const storeTokenData = async () => {
        // const res = await AsyncStorage.setItem('userToken', value.token)
        try {
            const res = await AsyncStorage.setItem('userLogin', 'true')
            // await AsyncStorage.setItem('@storage_Key', value)
            console.log(res);
            AuthDispatch(IsLoginHandler(true));
        } catch (error) {
            console.log(error, 'user_token_store....login page');
        }
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
            <Text style={styles.title_text_style}>Whats your email!</Text>
            <ScrollView style={styles.text_input_top_box}>

                <CustomTextInput
                    top_text={'Email'}
                    placeholder_text={'Enter Your Email Address'}
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                    close={email.length > 0 ? true : false}
                />
                <CustomTextInput
                    top_text={'Password'}
                    placeholder_text={'************'}
                    value={password}
                    isVisible={true}
                    onChangeText={(e) => setPassword(e)}
                    close={password.length > 0 ? true : false}
                />
                <GradientBtn
                    loginBtnText={'Log In'}
                    color={globalColor.text_primary_color}
                    onPress={() => loginHandler()}
                />
                <TouchableOpacity style={styles.forgot_pass_top_box}>
                    <CustomGradientText style={styles.forgot_text_style}>Forgotten Password?</CustomGradientText>
                </TouchableOpacity>

                <CustomBtn
                    bgColor={globalColor.bg_secondary_color}
                    btnText={'Login in with'}
                    color={globalColor.text_secondary_color}
                    marginTop={30}
                    img
                />
                <Text style={styles.or_text_style}>OR</Text>
                <Text style={styles.create_account_text_style}>Create an account now</Text>
                {/* <CustomBtn
                    bgColor={globalColor.bg_primary_color}
                    btnText={'Sign Up'}
                    color={globalColor.text_primary_color}
                    marginTop={15}
                    borderWidth={1}
                    borderColor={'#fff'}

                /> */}
                <CustomLinearGBorderBtn
                    btn_text={'Sign Up'}
                    onPress={() => navigation.navigate('SignUp')}
                />
            </ScrollView>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        paddingHorizontal: 25,
    },
    top_container: {
        flexDirection: 'row',
        alignItems: 'baseline',
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
    title_text_style: {
        width: 200,
        fontFamily: globalFF.montserrat_r,
        fontWeight: '800',
        fontSize: 40,
        lineHeight: 40,
        color: globalColor.text_primary_color,
        marginTop: 20
    },
    text_input_top_box: {
        marginTop: 30
    },
    login_top_box:
    {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    login_text_style: {
        color: ' rgba(255, 255, 255, 0.5)',
        fontFamily: globalFF.poppins_r,
        fontSize: 12,
    },
    forgot_pass_top_box: {
        alignSelf: 'center',
        marginTop: 20,
    },
    forgot_text_style: {
        fontFamily: globalFF.poppins_r,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 18,
        color: globalColor.linear_g_text_sc,
    },
    or_text_style: {
        fontFamily: globalFF.poppins_r,
        color: globalColor.text_primary_color,
        fontSize: 24,
        alignSelf: 'center',
        marginVertical: 20,
    },
    create_account_text_style: {
        fontFamily: globalFF.poppins_m,
        color: globalColor.text_gray_color,
        fontSize: 12,
        alignSelf: 'center',
        marginBottom: 5,
    },
})