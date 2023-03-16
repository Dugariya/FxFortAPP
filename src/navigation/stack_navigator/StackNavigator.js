import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/splash_screen/Splash';
import GetStart from '../../screens/get_start_screen/GetStart';
import SignUp from '../../screens/sign_up_screen/SignUp';
import SignIn from '../../screens/sign_in_screen/SignIn';
import ConnectWallet from '../../screens/connect_wallets/ConnectWallet';
import BottomTab from '../bottom_navigator/BottomTab';
import { useSelector } from 'react-redux';
import PassCode from '../../screens/passcode_screen/PassCode';
import OtpScreen from '../../screens/otp_screen/OtpScreen';
import PasscodeCreate from '../../screens/passcode_create_screen/PasscodeCreate';
import PasscodeConfirme from '../../screens/passcode_create_screen/PasscodeConfirme';
import CreateOrder from '../../screens/create_order_screen/CreateOrder';

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    const AuthRData = useSelector((state) => state.AuthReducer);
    console.log(AuthRData.passCode);
    // const reducerData = useSelector((state) => state.MMReducer);
    return (
        <Stack.Navigator>
            {
                AuthRData.splashLoading == true ?
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    : AuthRData.userToken === null ?
                        <>
                            <Stack.Screen name="GetStart" component={GetStart} options={{ headerShown: false }} />
                            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                            <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />

                        </>
                        : AuthRData?.passCode == null ?
                            <>
                                <Stack.Screen name="PasscodeCreate" component={PasscodeCreate} options={{ headerShown: false }} />
                                <Stack.Screen name="PasscodeConfirme" component={PasscodeConfirme} options={{ headerShown: false }} />
                            </> :
                            <>
                                <Stack.Screen name="PassCode" component={PassCode} options={{ headerShown: false }} />
                                <Stack.Screen name="ConnectWallet" component={ConnectWallet} options={{ headerShown: false }} />
                                <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
                                <Stack.Screen name="CreateOrder" component={CreateOrder} options={{ headerShown: false }} />
                            </>
            }
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})