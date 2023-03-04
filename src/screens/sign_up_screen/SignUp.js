import { Image, StyleSheet, Text, View, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalColor } from '../../global/globalcolors';
import { globalFF } from '../../global/globalFF';
import GradientText from '../../components/GradientText';
import CustomTextInput from '../../components/CustomTextInput';
import GradientBtn from '../../components/GradientBtn';
import { useNavigation } from '@react-navigation/native';
import CustomGradientText from '../../components/CustomGradientText';

const SignUp = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmePass, setConfirmePass] = useState('')

    const handleBack = () => {
        navigation.navigate('SignIn')
    }
    const loginHandler = () => {
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
            <Text style={styles.title_text_style}>Whats your email!</Text>
            <ScrollView style={styles.text_input_top_box}>
                <CustomTextInput
                    top_text={'Name'}
                    placeholder_text={'Enter Your Name'}
                    value={name}
                    onChangeText={(e) => setName(e)}
                    close={name.length > 0 ? true : false}
                />
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
                <CustomTextInput
                    top_text={'Confirm Password'}
                    placeholder_text={'************'}
                    value={confirmePass}
                    isVisible={true}
                    onChangeText={(e) => setConfirmePass(e)}
                    close={confirmePass.length > 0 ? true : false}
                />
                <GradientBtn
                    loginBtnText={'Sign Up'}
                    color={globalColor.text_primary_color}
                    onPress={() => handleBack()}
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
    }
})