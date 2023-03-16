import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TouchID from 'react-native-touch-id';
import Icon from "react-native-vector-icons/Ionicons";
import { globalColor } from '../../global/globalcolors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

const PassCode = () => {
    const navigation = useNavigation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passCodeText, setpassCodeText] = useState('')
    const [passCodeError, setpassCodeError] = useState(false)
    const AuthReducerData = useSelector((state) => state.AuthReducer)
    useEffect(() => {
        checkAuthantication();
    }, [])

    useEffect(() => {
        passCodeTextCheack();
    }, [passCodeText])

    const checkAuthantication = async () => {
        try {
            const res = await TouchID.isSupported();
            console.log(res);
            if (res) {
                pressHandler();
            }
        } catch (error) {
            console.log(error);
        }
    }
    const passCodeTextCheack = () => {
        setpassCodeError(false)
        if (passCodeText.length >= 4 && passCodeText === AuthReducerData.passCode) {
            navigation.replace('ConnectWallet')
        }
        if (passCodeText.length === 4 && passCodeText != AuthReducerData.passCode && !passCodeError) {
            setTimeout(() => {
                setpassCodeText('')
            }, 1000);
        }
        if (passCodeText.length >= 4 && passCodeText !== AuthReducerData.passCode) {
            setpassCodeError(true)
        }
    }

    const optionalConfigObject = {
        title: 'Authentication Required', // Android
        imageColor: '#324dd6', // Android
        imageErrorColor: '#333745', // Android
        sensorDescription: 'Touch sensor', // Android
        sensorErrorDescription: 'Failed', // Android
        cancelText: 'Cancel', // Android
        width: 100,
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };
    const pressHandler = () => {
        TouchID.authenticate('FxFort', optionalConfigObject)
            .then(success => {
                if (success) {
                    navigation.replace('ConnectWallet')
                }
                console.log(success);
            })
            .catch(error => {
                console.log(error);

            });
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
        <Animatable.View animation={'fadeInUp'} style={passcode.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: 20, }}>
                <Text style={passcode.keyboard_text_style}>Enter PassCode</Text>
                <View style={passcode.pass_code_key_box_top}>
                    <View style={[passcode.pass_code_key_box, { backgroundColor: passCodeText.length >= 1 ? globalColor.linear_g_text_fc : globalColor.text_gray_color }]}></View>
                    <View style={[passcode.pass_code_key_box, { backgroundColor: passCodeText.length >= 2 ? globalColor.linear_g_text_fc : globalColor.text_gray_color }]}></View>
                    <View style={[passcode.pass_code_key_box, { backgroundColor: passCodeText.length >= 3 ? globalColor.linear_g_text_fc : globalColor.text_gray_color }]}></View>
                    <View style={[passcode.pass_code_key_box, { backgroundColor: passCodeText.length >= 4 ? globalColor.linear_g_text_fc : globalColor.text_gray_color }]}></View>
                </View>
                {passCodeError &&
                    <Text style={[passcode.keyboard_text_style, { color: 'red' }]}>Enter Correct PassCode</Text>

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
                    <TouchableOpacity onPress={pressHandler} style={passcode.key}><Icon name="finger-print-outline" size={45} color="#5b68f6" /></TouchableOpacity>
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

        </Animatable.View>
    )
}

export default PassCode

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