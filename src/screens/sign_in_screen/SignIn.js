import { Image, StyleSheet, Text, View, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientText from '../../components/GradientText';
import CustomTextInput from '../../components/CustomTextInput';
import GradientBtn from '../../components/GradientBtn';
import { useNavigation } from '@react-navigation/native';
import CustomGradientText from '../../components/CustomGradientText';
import CustomBtn from '../../components/CustomBtn';
import { CustomLinearGBorderBtn } from '../../components/CustomLinearGBorderBtn';
import { useDispatch, useSelector } from 'react-redux';
import { IsLoginHandler, UserTokenHandler } from '../../Redux/Action/AuthReducerAction/AuthReducerAction';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from 'react-native-animatable';
import { _base_url } from '../../env';
import { postData } from '../../api/axios/AxiosAPI';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'

const SignIn = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const AuthDispatch = useDispatch();
    const AuthReducerData = useSelector((state) => state.AuthReducer)
    const [emailValidation, setemailVelidation] = useState(true)
    const [passwordValidation, setpasswordValidation] = useState(true)
    useEffect(() => {
        email.length > 0 ? emailValidateHandler(email) : setemailVelidation(true);
        password.length > 0 ? passwordValidationHandler(password) : setpasswordValidation(true);
    }, [email, password])


    const emailValidateHandler = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        const c = expression.test(String(email).toLowerCase())
        setemailVelidation(c);
    }
    const passwordValidationHandler = (event) => {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (strongRegex.test(event)) {
            setpasswordValidation(true)
        } else if (mediumRegex.test(event)) {
            setpasswordValidation(false)
        } else {
            setpasswordValidation(false)
        }
    }

    const sendData = {
        "email": "svikrant406@mailinator.com",
        "password": "Test123!@#",
    }
    const loginHandler = async () => {
        try {
            if (emailValidateHandler && passwordValidation && email.length > 0 && password.length > 0) {
                const res = await postData(`${_base_url}auth/login`, sendData)
                console.log("Axios response", res.data);
                if (res.status == 201) {
                    setUserToken(res.data.access_token);
                    // alert('OTP is send to Your Mobile Number OR Email ID')
                    // navigation.navigate('OtpScreen', sendData2)
                } else {
                    // alert('your account has been created successfully you can now logIn ')
                    if (res.data.message) {
                        alert(res.data.message)
                    } else {
                        alert('Something went wrong. Please try again after sometime');
                    }
                }
            }
            else {
                emailValidation && email.length <= 0 ? setemailVelidation(false) : ''
                passwordValidation && password.length <= 0 && setpasswordValidation(false)
            }

        } catch (error) {
            console.error(error, 'signUp...error');
        }
    }
    const setUserToken = async (id) => {
        try {
            const res = await RNSecureStorage.set("userToken", id, { accessible: ACCESSIBLE.WHEN_UNLOCKED })
            AuthDispatch(UserTokenHandler(id))
        } catch (error) {
            console.log(error);
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
                    onPress={() => setEmail('')}
                    close={email.length > 0 ? false : true}
                />
                {!emailValidation &&
                    <Animatable.Text animation={'slideInLeft'} style={styles.validate_text_style}>Enter Correct Email Address </Animatable.Text>
                }
                <CustomTextInput
                    top_text={'Password'}
                    placeholder_text={'************'}
                    value={password}
                    isVisible={true}
                    onChangeText={(e) => setPassword(e)}
                    onPress={() => setPassword('')}
                    close={password.length > 0 ? false : true}

                />
                {!passwordValidation &&
                    <Animatable.Text animation={'slideInLeft'} style={styles.validate_text_style}>Enter Strong Password </Animatable.Text>
                }
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
    validate_text_style:
    {
        color: 'red',
        marginTop: -20,
        marginBottom: 5
    },
})