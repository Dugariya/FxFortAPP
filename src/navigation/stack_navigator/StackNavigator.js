import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/splash_screen/Splash';
import GetStart from '../../screens/get_start_screen/GetStart';
import SignUp from '../../screens/sign_up_screen/SignUp';
import SignIn from '../../screens/sign_in_screen/SignIn';
import ConnectWallet from '../../screens/connect_wallets/ConnectWallet';
import BottomTab from '../bottom_navigator/BottomTab';



const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="GetStart" component={GetStart} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="ConnectWallet" component={ConnectWallet} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})