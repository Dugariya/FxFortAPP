import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TouchID from 'react-native-touch-id';
import Icon from "react-native-vector-icons/Ionicons";
import { globalColor } from '../../global/globalcolors';
import { useNavigation } from '@react-navigation/native';
import { IsLoginHandler, PassCodeHandler } from '../../Redux/Action/AuthReducerAction/AuthReducerAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'

const PasscodeConfirme = (props) => {
    const propsText = props.route.params.passCodeText;
    const navigation = useNavigation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passCodeText, setpassCodeText] = useState('')
    const [passCodeError, setpassCodeError] = useState(false)
    const AuthDispatch = useDispatch();

    useEffect(() => {
        passCodeTextCheack();
    }, [passCodeText])


    const passCodeTextCheack = () => {
        setpassCodeError(false)
        if (passCodeText.length >= 4 && passCodeText === propsText) {
            // navigation.replace('ConnectWallet')
            setPassCodeData();
        }
        if (passCodeText.length >= 4 && passCodeText !== propsText) {
            setpassCodeError(true)
        }
    }

    const setPassCodeData = async () => {
        // const res = await AsyncStorage.setItem('userToken', value.token)
        try {
            const res = await RNSecureStorage.set("passCode", passCodeText, { accessible: ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY })
            AuthDispatch(PassCodeHandler(passCodeText))
            console.log(res);
        } catch (error) {
            console.log(error, 'user_token_store....login page');
        }
    }

    const PassCodeTextHandler = (val) => {
        if (passCodeText.length < 4) {
            var prev = passCodeText
            var combine = prev + val
            setpassCodeText(combine);
        }
    }
    const PassCodeTextDeleteHandler = () => {
        if (passCodeText.length > 0) {
            var prev = passCodeText.substring(0, passCodeText.length - 1)
            setpassCodeText(prev);
        }
    }
    return (
        <View style={passcode.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: 20, }}>
                <Icon name={'lock-closed'} size={30} color={'#ffffff'} marginVertical={15} />
                <Text style={passcode.keyboard_text_style}>Confirm Your New PIN</Text>
                <View style={passcode.pass_code_key_box_top}>
                    <View style={[passcode.pass_code_key_box, { backgroundColor: passCodeText.length >= 1 ? globalColor.linear_g_text_fc : globalColor.text_gray_color }]}></View>
                    <View style={[passcode.pass_code_key_box, { backgroundColor: passCodeText.length >= 2 ? globalColor.linear_g_text_fc : globalColor.text_gray_color }]}></View>
                    <View style={[passcode.pass_code_key_box, { backgroundColor: passCodeText.length >= 3 ? globalColor.linear_g_text_fc : globalColor.text_gray_color }]}></View>
                    <View style={[passcode.pass_code_key_box, { backgroundColor: passCodeText.length >= 4 ? globalColor.linear_g_text_fc : globalColor.text_gray_color }]}></View>
                </View>
                {passCodeError &&
                    <Text style={[passcode.keyboard_text_style, { color: 'red' }]}>Enter Correct Pin</Text>
                }

            </View>
            <View style={passcode.keyboard}>
                <View style={passcode.keys}>
                    <TouchableOpacity onPress={() => PassCodeTextHandler('1')}
                        style={passcode.key} ><Text style={passcode.keyboard_text_style}>1</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => PassCodeTextHandler('4')}
                        style={passcode.key}><Text style={passcode.keyboard_text_style}>4</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => PassCodeTextHandler('7')}
                        style={passcode.key}><Text style={passcode.keyboard_text_style}>7</Text></TouchableOpacity>

                </View>
                <View style={passcode.keys}>
                    <TouchableOpacity onPress={() => PassCodeTextHandler('2')}
                        style={passcode.key}><Text style={passcode.keyboard_text_style}>2</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => PassCodeTextHandler('5')}
                        style={passcode.key}><Text style={passcode.keyboard_text_style}>5</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => PassCodeTextHandler('8')}
                        style={passcode.key}><Text style={passcode.keyboard_text_style}>8</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => PassCodeTextHandler('0')}
                        style={passcode.key}><Text style={passcode.keyboard_text_style}>0</Text></TouchableOpacity>
                </View>
                <View style={passcode.keys}>
                    <TouchableOpacity onPress={() => PassCodeTextHandler('3')}
                        style={passcode.key}><Text style={passcode.keyboard_text_style}>3</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => PassCodeTextHandler('6')}
                        style={passcode.key}><Text style={passcode.keyboard_text_style}>6</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => PassCodeTextHandler('9')}
                        style={passcode.key}><Text style={passcode.keyboard_text_style}>9</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => PassCodeTextDeleteHandler()}
                        style={passcode.key}  ><Icon name="backspace-outline" size={30} color="#fff" /></TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default PasscodeConfirme

const passcode = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        paddingHorizontal: 25,
        justifyContent: 'center',
    },
    passinput: {
        borderBottomWidth: 1,
        borderColor: '#f7f7f7',
        width: 100,
        height: 40,
        color: '#fff'
    },
    keyboard: {
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'center',
    },
    keys: {
        flexDirection: 'column',
        gap: 30,
    },
    key: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: globalColor.text_primary_color
    },
    keyboard_text_style: {
        fontSize: 22,
        color: globalColor.text_primary_color
    },
    pass_code_key_box: {
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: '#c4c4c4',
        marginHorizontal: 5,
    },
    pass_code_key_box_top: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 20
    }
});
