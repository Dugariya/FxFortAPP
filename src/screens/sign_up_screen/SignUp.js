import { Image, StyleSheet, Text, View, ScrollView, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientText from '../../components/GradientText';
import CustomTextInput from '../../components/CustomTextInput';
import GradientBtn from '../../components/GradientBtn';
import { useNavigation } from '@react-navigation/native';
import CustomGradientText from '../../components/CustomGradientText';
import * as Animatable from 'react-native-animatable';
import PhoneInput from "react-native-phone-number-input";
import Icon from 'react-native-vector-icons/Ionicons'
import { phone } from 'phone';
import { postData } from '../../api/axios/AxiosAPI';
import { _base_url } from '../../env';

const SignUp = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [countryCode, setCountryCode] = useState('+91');
    const [countryName, setCountryName] = useState('India')
    const [nameValidation, setnameValidation] = useState(true)
    const [emailValidation, setemailVelidation] = useState(true)
    const [passwordValidation, setpasswordValidation] = useState(true)
    const [phoneNumberValidation, setPhoneNumberValidation] = useState(true)

    useEffect(() => {
        email.length > 0 ? emailValidateHandler(email) : setemailVelidation(true);
        password.length > 0 ? passwordValidationHandler(password) : setpasswordValidation(true);
        name.length > 0 ? nameValidationHandler(name) : setnameValidation(true);
        phoneNumber.length > 0 ? mobileValidationHandler(phoneNumber) : setPhoneNumberValidation(true)

    }, [email, password, phoneNumber, name])

    const sendData = {
        "email": email,
        "mobile": countryCode + phoneNumber
    }
    const sendData2 = {
        "fullname": name,
        "email": email,
        "mobile": countryCode + phoneNumber,
        "password": password,
        "country": countryName,
    }
    const signUpHandler = async () => {
        // console.log(sendData);
        try {
            if (emailValidateHandler && passwordValidation && phoneNumberValidation && email.length > 0 && password.length > 0 && phoneNumber.length > 0 && name.length > 0 && nameValidation) {
                const res = await postData(`${_base_url}auth/send-register-code`, sendData)
                console.log("Axios response", res);
                if (res.status == 201) {
                    alert('OTP is send to Your Mobile Number OR Email ID')
                    navigation.navigate('OtpScreen', sendData2)
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
                phoneNumberValidation && phoneNumber.length <= 0 && setPhoneNumberValidation(false)
                nameValidation && name.length <= 0 && setnameValidation(false)
                // navigation.navigate('OtpScreen')

            }

        } catch (error) {
            console.error(error, 'signUp...error');
        }
    }
    const loginHandler = () => {
        navigation.navigate('SignIn')
    }
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
    const mobileValidationHandler = (phonenumber) => {
        let c = phone(`+${countryCode} ${phonenumber}`);
        // console.log(c.isValid);
        setPhoneNumberValidation(c.isValid)


    }
    const nameValidationHandler = (name) => {
        if (name.length < 4) {
            setnameValidation(false);
        } else {
            setnameValidation(true);
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
                    top_text={'Name'}
                    placeholder_text={'Enter Your Name'}
                    value={name}
                    onChangeText={(e) => setName(e)}
                    onPress={() => setName('')}
                    close={name.length > 0 ? false : true}
                />
                {!nameValidation &&
                    <Animatable.Text animation={'slideInLeft'} style={styles.validate_text_style}>Enter at Least 4 Characters </Animatable.Text>
                }
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
                <Text style={styles.phone_number_text_style}>Phone Number</Text>
                <View style={styles.phone_text_input_top_box_style}>
                    <View style={{
                        // borderWidth: 1,
                        // borderColor: '#f33',
                        marginLeft: -10
                    }}>
                        <PhoneInput
                            defaultCode="IN"
                            layout="second"
                            withDarkTheme
                            onChangeCountry={(e) => {
                                setCountryCode(e.callingCode[0]);
                                setCountryName(e.name);
                            }}
                            placeholder={'Enter Your Phone Number'}
                            placeholderTextColor={'#fff'}
                            containerStyle={{
                                backgroundColor: 'transparent',
                                height: 45,
                                width: 70,
                            }}
                            textContainerStyle={{
                                backgroundColor: '#000',
                            }}
                            codeTextStyle={{
                                color: "#ffffff",
                                fontFamily: globalFF.poppins_m,
                                fontSize: 16,
                                marginBottom: -13
                            }}


                        />
                    </View>

                    <TextInput
                        placeholder='Enter Your Phone Number'
                        placeholderTextColor={'#868181'}
                        value={phoneNumber}
                        focusable={false}
                        keyboardType={'number-pad'}
                        onChangeText={(e) => setPhoneNumber(e)}
                        onPress={() => setPhoneNumber('')}
                        style={styles.phone_text_input_style}
                    />
                    {phoneNumber.length > 0 &&
                        <TouchableOpacity onPress={() => setPhoneNumber('')} >
                            <Icon name={'close-circle'} size={20} color={globalColor.text_primary_color} style={styles.close_icon_style} />
                        </TouchableOpacity>
                    }
                </View>
                {!phoneNumberValidation &&
                    <Animatable.Text animation={'slideInLeft'} style={styles.validate_text_style}>Enter Correct Mobile Number </Animatable.Text>
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
                    loginBtnText={'Sign Up'}
                    color={globalColor.text_primary_color}
                    onPress={() => signUpHandler()}
                />
                <View style={styles.hr_line_box}></View>
                <Text style={styles.continue_text_style}>or continue with</Text>
                <TouchableOpacity style={styles.google_top_box}>
                    <Image
                        source={require('../../image/google_logo.png')}
                        style={{ height: '75%', width: '75%' }}
                    />
                </TouchableOpacity>
                <View style={styles.login_top_box}>
                    <Text style={styles.login_text_style}>Already have account </Text>
                    <TouchableOpacity onPress={() => loginHandler()}>
                        <CustomGradientText style={[styles.login_text_style, { color: globalColor.linear_g_text_sc }]}> Log In</CustomGradientText>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp

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
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 40,
        color: globalColor.text_primary_color,
        marginTop: 20
    },
    text_input_top_box: {
        marginTop: 30
    },
    hr_line_box: {
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 20,
    },
    continue_text_style: {
        color: globalColor.text_primary_color,
        fontFamily: globalFF.poppins_r,
        fontSize: 12,
        alignSelf: 'center',
        backgroundColor: '#000',
        paddingHorizontal: 10,
        marginTop: -10
    },
    google_top_box: {
        width: 50,
        height: 50,
        borderRadius: 40,
        backgroundColor: globalColor.bg_secondary_color,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
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
    validate_text_style:
    {
        color: 'red',
        marginTop: -20,
        marginBottom: 5
    },
    phone_number_text_style: {
        fontFamily: globalFF.poppins_m,
        color: globalColor.text_primary_color,
        fontSize: 16,
        marginBottom: -5
    },
    close_icon_style: {
        position: 'absolute',
        right: 0,
        bottom: -22
    },
    phone_text_input_style: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: globalFF.poppins_r,
        color: globalColor.text_primary_color,
        flex: 1,
        height: 40, marginBottom: -15,
        paddingRight: 20,
    },
    phone_text_input_top_box_style: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        marginBottom: 25,

    }
})