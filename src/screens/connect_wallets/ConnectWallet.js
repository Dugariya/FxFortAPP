import { Image, ImageBackground, StyleSheet, Text, View, Linking, LogBox } from 'react-native'
import React, { useState, useEffect } from 'react'
import { globalColor } from '../../global/globalcolors'
import { globalFF } from '../../global/globalFF'
import GradientText from '../../components/GradientText'
import CustomBtn from '../../components/CustomBtn'
import GradientBtn from '../../components/GradientBtn';
import { useNavigation } from '@react-navigation/native';
import detectEthereumProvider from '@metamask/detect-provider';


import MetaMaskSDK from '@metamask/sdk';
import BackgroundTimer from 'react-native-background-timer';
import { useDispatch, useSelector } from 'react-redux'
import { ChainIdHandler, MetaMaskAddHandler } from '../../Redux/Action/MetaMaskAction/MetaMaskAction'
// import ethers from 'ethers';

LogBox.ignoreLogs(['new NativeEventEmitter']);
const MMSDK = new MetaMaskSDK({
    openDeeplink: (link) => {
        Linking.openURL(link); // Use React Native Linking method or your favourite way of opening deeplinks
    },
    timer: BackgroundTimer, // To keep the app alive once it goes to background
    dappMetadata: {
        name: 'My App', // The name of your application
        url: 'https://myapp.com', // The url of your website
    },
});

const ethereum = MMSDK.getProvider();
// const provider = new ethers.providers.Web3Provider(ethereum);



const ConnectWallet = () => {
    const navigation = useNavigation();

    const [account, setAccount] = useState();
    const [chain, setChain] = useState();
    const [balance, setBalance] = useState();
    const reducerData = useSelector((state) => state.MMReducer);
    const mmDispatch = useDispatch();
    console.log(reducerData);
    // useEffect(() => {
    //     mmDispatch(MetaMaskAddHandler('pavan22'));
    // }, [])

    // console.log(account);
    // console.log(ethereum);
    const checkMetamask = async () => {
        try {

            const detectProvider = await detectEthereumProvider();
            console.log(detectProvider);
            if (detectProvider) {
                // startApp(detectProvider); // initialize your app
                console.log('start');
            } else {
                console.log('Please install MetaMask!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     checkMetamask();
    // }, [])



    // const getBalance = async () => {
    //     if (!ethereum.selectedAddress) {
    //         return;
    //     }
    //     const bal = await provider.getBalance(ethereum.selectedAddress);
    //     setBalance(ethers.utils.formatEther(bal));
    //     console.log(bal);
    // };
    const connectHandler = async () => {
        // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        // console.log(accounts);
        // setAccount(accounts?.[0]);
        // mmDispatch(MetaMaskAddHandler(accounts?.[0]));
        // const chainId = await ethereum.request({ method: 'eth_chainId' });
        // console.log(chainId);
        // mmDispatch(ChainIdHandler(chainId))
        // if (account.length != 0) {
        navigation.navigate('BottomTab')
        // }
        // getBalance();
    }

    const sendTransaction = async () => {
        const to = '0x0000000000000000000000000000000000000000';
        const transactionParameters = {
            to, // Required except during contract publications.
            from: ethereum.selectedAddress, // must match user's active address.
            value: '0x5AF3107A4000', // Only required to send ether to the recipient from the initiating external account.
        };
        try {
            // txHash is a hex string
            // As with any RPC call, it may throw an error
            const txHash = await ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });

            setResponse(txHash);
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <>
            <View style={styles.container}>
                <View style={styles.top_container}>
                    <Image
                        source={require('../../image/fxfort_logo.png')}
                        style={styles.top_logo_style}
                    />
                    <GradientText style={styles.top_text_style}>Fx</GradientText>
                    <Text style={styles.top_text_style}>Fort</Text>
                </View>
                <Text style={styles.title_text_style}>Connect your wallet</Text>
                <CustomBtn
                    bgColor={globalColor.bg_secondary_color}
                    btnText={'Connect with Metamask'}
                    color={globalColor.text_secondary_color}
                    marginTop={50}
                    img2
                    onPress={connectHandler}
                />
                <GradientBtn
                    loginBtnText={'Connect with Trust wallet'}
                    color={globalColor.text_primary_color}
                    marginTop={30}
                    onPress={sendTransaction}
                    img2
                />


            </View>
            <View style={styles.bg_img_top_container}>
                <ImageBackground
                    source={require('../../image/line_group.png')}
                    style={styles.line_bg_style}
                >
                    <Image
                        source={require('../../image/get_start_shape1.png')}
                        style={styles.shape1_bg_style}
                    />

                </ImageBackground>

            </View>
        </>

    )
}

export default ConnectWallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        paddingHorizontal: 25,
    },
    top_container: {
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingTop: 45,
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
    line_bg_style: {
        width: '100%',
        height: '100%',
    },
    shape1_bg_style: {
        height: 440,
        width: 440,
        alignItems: 'center',
        position: 'absolute',
        bottom: -120,
        right: -130,

    },
    bg_img_top_container: {
        position: 'absolute',
        height: '50%',
        width: '100%',
        bottom: 0,

    }
})
