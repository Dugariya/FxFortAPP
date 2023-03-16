import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientText from '../../components/GradientText';
import { CustomLinearGBorderBtn } from '../../components/CustomLinearGBorderBtn';
import GradientBtn from '../../components/GradientBtn';
import { _base_url } from '../../env';
import { postData } from '../../api/axios/AxiosAPI';
import * as Animatable from 'react-native-animatable';
import { globalStyle } from '../../global/globalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { UserDataHandler, UserTockenHandler, UserTokenHandler } from '../../Redux/Action/AuthReducerAction/AuthReducerAction';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import CustomGradientText from '../../components/CustomGradientText';

const OtpScreen = () => {
    const navigation = useNavigation();
    const { params } = useRoute();
    const AuthDispatch = useDispatch();
    const AuthDataReducer = useSelector((state) => state.AuthReducer)
    const [mobileVerify, setmobileVerify] = useState(true);
    const [emailVerify, setEmailVerify] = useState(true);
    const fullName = params.fullname;
    const email = params.email;
    const country = params.country;
    const mobile = params.mobile;
    const password = params.password;

    const pin1Ref = useRef(null)
    const pin2Ref = useRef(null)
    const pin3Ref = useRef(null)
    const pin4Ref = useRef(null)
    const pin5Ref = useRef(null)
    const pin6Ref = useRef(null)

    const [pin1, setpin1] = useState('')
    const [pin2, setpin2] = useState('')
    const [pin3, setpin3] = useState('')
    const [pin4, setpin4] = useState('')
    const [pin5, setpin5] = useState('')
    const [pin6, setpin6] = useState('')

    const [emailpin1, setEmailpin1] = useState('')
    const [emailpin2, setEmailpin2] = useState('')
    const [emailpin3, setEmailpin3] = useState('')
    const [emailpin4, setEmailpin4] = useState('')
    const [emailpin5, setEmailpin5] = useState('')
    const [emailpin6, setEmailpin6] = useState('')

    const emailPin1Ref = useRef(null)
    const emailPin2Ref = useRef(null)
    const emailPin3Ref = useRef(null)
    const emailPin4Ref = useRef(null)
    const emailPin5Ref = useRef(null)
    const emailPin6Ref = useRef(null)

    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [minutes1, setMinutes1] = useState(5);
    const [seconds1, setSeconds1] = useState(0);
    const [allfill, setAllfill] = useState(false)
    useEffect(() => {
        itsFillHandler();
    }, [pin1, pin2, pin3, pin4, pin5, pin6, emailpin1, emailpin5, emailpin6])

    // timer useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds, minutes]);

    useEffect(() => {
        const interval1 = setInterval(() => {
            if (seconds1 > 0) {
                setSeconds1(seconds1 - 1);
            }

            if (seconds1 === 0) {
                if (minutes1 === 0) {
                    clearInterval(interval1);
                } else {
                    setSeconds1(59);
                    setMinutes1(minutes1 - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval1);
        };
    }, [seconds1, minutes1]);

    const itsFillHandler = () => {
        if (pin1 != '' && pin2 != '' && pin3 != '' && pin4 != '' && pin5 != '' && pin6 != '' && emailpin1 != '' && emailpin2 != '' && emailpin3 != '' && emailpin4 != '' && emailpin5 != '' && emailpin6 != '') {
            setAllfill(true);
        } else {
            setAllfill(false);
        }
    }

    const MOTP = pin1 + pin2 + pin3 + pin4 + pin5 + pin6;
    const EOTP = emailpin1 + emailpin2 + emailpin3 + emailpin4 + emailpin5 + emailpin6;
    const sendData = {
        "fullname": fullName,
        "email": email,
        "mobile": mobile,
        "password": password,
        "country": country,
        "mobileVerificationCode": MOTP,
        "emailVerificationCode": EOTP
    }

    const OTPSubmitHandler = async () => {
        try {
            if (MOTP.length >= 6 && EOTP.length >= 6) {
                const res = await postData(`${_base_url}auth/register`, sendData);
                console.log(res.data);
                if (res.status == 201) {
                    setUserToken(res.data.access_token);
                    AuthDispatch(UserDataHandler(res.data));
                    alert('your account has been created successfully')
                    console.log(res.data);
                } else {
                    if (res.data.meta?.mobile) {
                        setmobileVerify(res.data.meta?.mobile.status)
                        console.log(res.data.meta?.mobile.status, 'yes');
                    }
                    if (res.data.meta?.email) {
                        setEmailVerify(res.data.meta?.email.status)
                        console.log(res.data.meta?.email.status, 'no');
                    }
                    if (res.data.message) {
                        alert(res.data.message)

                    } else {
                        alert('Something went wrong. Please try again after sometime');
                    }
                }
            }
        } catch (error) {
            console.log(error, 'otp submit error.....');
        }
    }
    const setUserToken = async (id) => {
        try {
            const res = await RNSecureStorage.set("userToken", id, { accessible: ACCESSIBLE.WHEN_UNLOCKED })
            console.log(res);
            AuthDispatch(UserTokenHandler(id))
        } catch (error) {
            console.log(error);
        }
    }
    const ResendOTPHandler = async (id) => {
        const senResendData = {
            "email": email,
            "mobile": mobile
        }
        try {
            const res = await postData(`${_base_url}auth/send-register-code?onlyTransport=${id}`, senResendData);
            console.log(res.status);
            if (res.status == 201) {
                alert('OTP is Resend to Your Mobile Number OR Email ID')
            } else {
                if (res.data.message) {
                    alert(res.data.message)
                } else {
                    alert('Something went wrong. Please try again after sometime');
                }
            }
        } catch (error) {
            console.log(error, 'resend otp..error,');
        }
    }
    const Heading = ({ name }) => {
        return (
            <Text style={styles.heading}>Enter the 6-digit <Text style={{ fontWeight: 'bold', }}>OTP</Text> sent
                to your <Text style={{ fontWeight: '600', color: globalColor.linear_g_sc }}>{name}</Text> </Text>
        )
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
            <ScrollView>

                <View style={styles.container2}>
                    <View>
                        <Heading name={'xxxxxxx856'} />
                        <View style={styles.otpfiled}>
                            <TextInput
                                ref={pin1Ref}
                                maxLength={1}
                                textAlign={'center'}
                                keyboardType={'number-pad'}
                                autoComplete={'sms-otp'}
                                onChangeText={(e) => {
                                    e && pin2Ref?.current?.focus()
                                    setpin1(e)

                                }}
                                value={pin1}
                                style={[styles.filed, {
                                    backgroundColor: pin1 !== '' ? '#fff' : '#000',
                                    color: pin1 !== '' ? '#000' : '#fff',
                                    borderColor: !mobileVerify ? 'red' : '#fff',
                                    borderWidth: !mobileVerify ? 2 : 1,
                                }]} />
                            <TextInput
                                ref={pin2Ref}
                                maxLength={1}
                                textAlign={'center'}
                                keyboardType={'number-pad'}
                                autoComplete={'sms-otp'}

                                value={pin2}
                                onChangeText={(e) => {
                                    e ? pin3Ref.current.focus() : pin1Ref.current.focus()
                                    setpin2(e)
                                }
                                }
                                style={[styles.filed, {
                                    borderColor: !mobileVerify ? 'red' : '#fff',
                                    borderWidth: !mobileVerify ? 2 : 1,
                                    backgroundColor: pin2 !== '' ? '#fff' : '#000', color: pin2 !== '' ? '#000' : '#fff'
                                }]} />
                            <TextInput
                                ref={pin3Ref}
                                maxLength={1}
                                textAlign={'center'}
                                keyboardType={'number-pad'}
                                autoComplete={'sms-otp'}

                                value={pin3}
                                onChangeText={(e) => {
                                    e ? pin4Ref.current.focus() : pin2Ref.current.focus()
                                    setpin3(e)
                                }
                                }
                                style={[styles.filed, {
                                    borderColor: !mobileVerify ? 'red' : '#fff',
                                    borderWidth: !mobileVerify ? 2 : 1,
                                    backgroundColor: pin3 !== '' ? '#fff' : '#000', color: pin3 !== '' ? '#000' : '#fff'
                                }]} />
                            <TextInput
                                ref={pin4Ref}
                                maxLength={1}
                                textAlign={'center'}
                                keyboardType={'number-pad'}
                                value={pin4}
                                autoComplete={'sms-otp'}

                                onChangeText={(e) => {
                                    e ? pin5Ref.current.focus() : pin3Ref.current.focus()
                                    setpin4(e)
                                }
                                }
                                style={[styles.filed, {
                                    borderColor: !mobileVerify ? 'red' : '#fff',
                                    borderWidth: !mobileVerify ? 2 : 1,
                                    backgroundColor: pin4 !== '' ? '#fff' : '#000', color: pin4 !== '' ? '#000' : '#fff'
                                }]} />
                            <TextInput
                                ref={pin5Ref}
                                maxLength={1}
                                textAlign={'center'}
                                autoComplete={'sms-otp'}
                                keyboardType={'number-pad'}
                                value={pin5}
                                onChangeText={(e) => {
                                    e ? pin6Ref.current.focus() : pin4Ref.current.focus()
                                    setpin5(e)
                                }
                                }
                                style={[styles.filed, {
                                    borderColor: !mobileVerify ? 'red' : '#fff',
                                    borderWidth: !mobileVerify ? 2 : 1,
                                    backgroundColor: pin5 !== '' ? '#fff' : '#000', color: pin5 !== '' ? '#000' : '#fff'
                                }]} />
                            <TextInput
                                ref={pin6Ref}
                                maxLength={1}
                                textAlign={'center'}
                                autoComplete={'sms-otp'}
                                keyboardType={'number-pad'}
                                value={pin6}
                                onChangeText={(e) => {
                                    e == '' && pin5Ref.current.focus()
                                    setpin6(e)
                                }
                                }
                                style={[styles.filed, {
                                    borderColor: !mobileVerify ? 'red' : '#fff',
                                    borderWidth: !mobileVerify ? 2 : 1,
                                    backgroundColor: pin6 !== '' ? '#fff' : '#000', color: pin6 !== '' ? '#000' : '#fff'
                                }]} />
                        </View>
                    </View>
                    {MOTP.length > 0 && MOTP.length <= 5 &&
                        <Animatable.Text animation={'slideInLeft'} style={globalStyle.validate_text_style}>Fill The OTP </Animatable.Text>
                    }
                    <View style={{ flexDirection: 'row', }}>

                        <TouchableOpacity
                            disabled={seconds1 > 0 || minutes1 > 0}
                            onPress={() => {
                                ResendOTPHandler('Mobile')
                                setMinutes1(0)
                                setSeconds1(2)
                            }}
                            style={{ opacity: seconds1 > 0 || minutes1 > 0 ? 0.5 : 1, }}
                        >

                            <CustomGradientText style={[styles.resend_text_style, { color: globalColor.linear_g_text_fc, }]}>Resend OTP  </CustomGradientText>
                        </TouchableOpacity>
                        {(seconds1 > 0 || minutes1 > 0) &&
                            <Text style={{ color: 'white' }}>
                                ({minutes1 < 10 ? `0${minutes1}` : minutes1}:
                                {seconds1 < 10 ? `0${seconds1}` : seconds1})
                            </Text>}
                    </View>
                    <View style={{}}>
                        <Heading name={'xxx@gmail.com'} />
                        <View style={styles.otpfiled}>
                            <TextInput
                                ref={emailPin1Ref}
                                maxLength={1}
                                textAlign={'center'}
                                keyboardType={'number-pad'}
                                onChangeText={(e) => {
                                    e && emailPin2Ref?.current?.focus()
                                    setEmailpin1(e)

                                }}
                                value={emailpin1}
                                style={[styles.filed, {
                                    borderColor: !emailVerify ? 'red' : '#fff',
                                    borderWidth: !emailVerify ? 2 : 1,
                                    backgroundColor: emailpin1 !== '' ? '#fff' : '#000', color: emailpin1 !== '' ? '#000' : '#fff'
                                }]} />
                            <TextInput
                                ref={emailPin2Ref}
                                maxLength={1}
                                textAlign={'center'}
                                keyboardType={'number-pad'}
                                value={emailpin2}
                                onChangeText={(e) => {
                                    e ? emailPin3Ref.current.focus() : emailPin1Ref.current.focus()
                                    setEmailpin2(e)
                                }
                                }
                                style={[styles.filed, {
                                    borderColor: !emailVerify ? 'red' : '#fff',
                                    borderWidth: !emailVerify ? 2 : 1,
                                    backgroundColor: emailpin2 !== '' ? '#fff' : '#000', color: emailpin2 !== '' ? '#000' : '#fff'
                                }]} />
                            <TextInput
                                ref={emailPin3Ref}
                                maxLength={1}
                                textAlign={'center'}
                                keyboardType={'number-pad'}
                                value={emailpin3}
                                onChangeText={(e) => {
                                    e ? emailPin4Ref.current.focus() : emailPin2Ref.current.focus()
                                    setEmailpin3(e)
                                }
                                }
                                style={[styles.filed, {
                                    borderColor: !emailVerify ? 'red' : '#fff',
                                    borderWidth: !emailVerify ? 2 : 1,
                                    backgroundColor: emailpin3 !== '' ? '#fff' : '#000', color: emailpin3 !== '' ? '#000' : '#fff'
                                }]} />
                            <TextInput
                                ref={emailPin4Ref}
                                maxLength={1}
                                textAlign={'center'}
                                keyboardType={'number-pad'}
                                value={emailpin4}
                                onChangeText={(e) => {
                                    e ? emailPin5Ref.current.focus() : emailPin3Ref.current.focus()
                                    setEmailpin4(e)
                                }
                                }
                                style={[styles.filed, {
                                    borderColor: !emailVerify ? 'red' : '#fff',
                                    borderWidth: !emailVerify ? 2 : 1,
                                    backgroundColor: emailpin4 !== '' ? '#fff' : '#000', color: emailpin4 !== '' ? '#000' : '#fff'
                                }]} />
                            <TextInput
                                ref={emailPin5Ref}
                                maxLength={1}
                                textAlign={'center'}
                                keyboardType={'number-pad'}
                                value={emailpin5}
                                onChangeText={(e) => {
                                    e ? emailPin6Ref.current.focus() : emailPin4Ref.current.focus()
                                    setEmailpin5(e)
                                }
                                }
                                style={[styles.filed, {
                                    borderColor: !emailVerify ? 'red' : '#fff',
                                    borderWidth: !emailVerify ? 2 : 1,
                                    backgroundColor: emailpin5 !== '' ? '#fff' : '#000', color: emailpin5 !== '' ? '#000' : '#fff'
                                }]} />
                            <TextInput
                                ref={emailPin6Ref}
                                maxLength={1}
                                textAlign={'center'}
                                keyboardType={'number-pad'}
                                value={emailpin6}
                                onChangeText={(e) => {
                                    e == '' && emailPin5Ref.current.focus()
                                    setEmailpin6(e)
                                }
                                }
                                style={[styles.filed, {
                                    borderColor: !emailVerify ? 'red' : '#fff',
                                    borderWidth: !emailVerify ? 2 : 1,
                                    backgroundColor: emailpin6 !== '' ? '#fff' : '#000', color: emailpin6 !== '' ? '#000' : '#fff'
                                }]} />
                        </View>
                    </View>
                    {EOTP.length > 0 && EOTP.length <= 5 &&
                        <Animatable.Text animation={'slideInLeft'} style={globalStyle.validate_text_style}>Fill The OTP </Animatable.Text>
                    }

                    <View style={{ flexDirection: 'row', }}>

                        <TouchableOpacity
                            disabled={seconds > 0 || minutes > 0}
                            onPress={() => {
                                ResendOTPHandler('Email')
                                setMinutes(5)
                                setSeconds(2)
                            }}
                            style={{ opacity: seconds > 0 || minutes > 0 ? 0.5 : 1, }}
                        >

                            <CustomGradientText style={[styles.resend_text_style, { color: globalColor.linear_g_text_fc, }]}>Resend OTP  </CustomGradientText>
                        </TouchableOpacity>
                        {(seconds > 0 || minutes > 0) &&
                            <Text style={{ color: 'white' }}>
                                ({minutes < 10 ? `0${minutes}` : minutes}:
                                {seconds < 10 ? `0${seconds}` : seconds})
                            </Text>}
                    </View>

                    <View style={{ marginBottom: 200 }}></View>
                </View>
            </ScrollView>
            {
                allfill ?
                    <GradientBtn
                        loginBtnText={'Continue'}
                        color={'#fff'}
                        position='absolute'
                        bottom={20}
                        alignSelf={'center'}
                        width={'100%'}
                        onPress={() => OTPSubmitHandler()}
                    /> :
                    <CustomLinearGBorderBtn
                        btn_text={'Continue'}
                        position='absolute'
                        alignSelf={'center'}
                        bottom={20}

                    />
            }

        </View>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        paddingHorizontal: 25,

    },
    container2: {
        // flex: 1,
        marginTop: 30,
        gap: 40,
    },
    heading: {
        fontSize: 24,
        color: globalColor.text_primary_color,
        fontFamily: globalFF.poppins_m
    },
    otpfiled: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 20,

    },
    filed: {
        borderRadius: 9,
        borderWidth: 1,
        borderColor: globalColor.bg_secondary_color,
        width: 40,
        height: 40,
        color: globalColor.bg_secondary_color,
        textAlign: 'center',

        // paddingHorizontal: 14,

    },
    bottomcontainer: {
        marginBottom: 30,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        alignSelf: 'center'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        height: 52,

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
    resend_text_style: {
        fontFamily: globalFF.poppins_r,
        fontSize: 14,
    },
});