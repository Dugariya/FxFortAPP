import { Image, ImageBackground, StyleSheet, Text, View, Linking, LogBox, Modal } from 'react-native'
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
import { useWalletConnect, withWalletConnect, } from "@walletconnect/react-native-dapp";
import { IsWalletConnectedHandler, WalletAddressHandler } from '../../Redux/Action/WalletAction/WalletAction'
import { transactiionHaxHandler } from '../util/utils';
import { postApiData, postData } from '../../api/axios/AxiosAPI'
import { _base_url } from '../../env';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import { UserTokenHandler } from '../../Redux/Action/AuthReducerAction/AuthReducerAction'

LogBox.ignoreLogs(['new NativeEventEmitter']);
// const MMSDK = new MetaMaskSDK({
//     openDeeplink: (link) => {
//         Linking.openURL(link); // Use React Native Linking method or your favourite way of opening deeplinks
//     },
//     timer: BackgroundTimer, // To keep the app alive once it goes to background
//     dappMetadata: {
//         name: 'My App', // The name of your application
//         url: 'https://myapp.com', // The url of your website
//     },
// });
// const ethereum = MMSDK.getProvider();
// const provider = new ethers.providers.Web3Provider(ethereum);



const ConnectWallet = () => {
    const connector = useWalletConnect(); // valid

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [account, setAccount] = useState();
    const [chain, setChain] = useState();
    const [balance, setBalance] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const reducerData = useSelector((state) => state.MMReducer);
    const wallertReducerData = useSelector((state) => state.WalletReducer);
    // console.log(wallertReducerData);

    // wallet is connect account code
    useEffect(() => {
        // const c = connector.session;
        // checkIsConnectedAll();
    }, [wallertReducerData.walletAddress])
    console.log(connector.connected);

    // const checkIsConnectedAll = async () => {
    //     if (connector.connected && wallertReducerData.walletAddress === '' && wallertReducerData.isWalletConnected == 'false') {
    //         const res = await connector.accounts
    //         dispatch(WalletAddressHandler(res[0]))
    //         setModalVisible(!modalVisible)

    //     } else {
    //         if (!wallertReducerData.isWalletConnected && wallertReducerData.walletAddress !== '') {
    //             setModalVisible(!modalVisible)
    //         }
    //     }
    //     // if (!wallertReducerData.isWalletConnected && wallertReducerData.walletAddress !== '') {
    //     //     setModalVisible(!modalVisible)
    //     // }
    // }

    const mmDispatch = useDispatch();
    // console.log(reducerData);
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

    const authenticateWallet = (address1) => {
        const address = address1;
        console.log(address, 'address.....>.>>>');
        postApiData(`${_base_url}auth/me/:address/consent/${address}`, {})
            .then(async (res1) => {
                console.log(res1.data, 'res1.....>>>>>');
                try {
                    const sign = await connector.signPersonalMessage([res1.data.consent, address])
                    postApiData(`${_base_url}auth/me/:address/connect/${address}`, {
                        signature: sign
                    }).then((res3) => {
                        // Receive access token & replace current token
                        // Redirect screen
                        if (res3.data.accessToken) {
                            setUserToken(res3.data)
                        } else (
                            alert(res3.data.message)
                        )
                        console.log('res3..', res3);
                    }).catch(e => {
                        // Show api response message
                        alert(e)
                        console.error('error..res3', e);
                    })
                } catch (e) {
                    // Show error message
                    alert(e)
                    console.error('error..res3', e);
                }
            }).catch(e => {
                // Show api response message
                alert(e)
                console.error('error..res4', e);
            })
        dispatch(WalletAddressHandler(address))
        console.log('hell');
    }
    const setUserToken = async (id) => {
        const token = id.access_token;
        console.log('token', token);
        try {
            const res = await RNSecureStorage.set("userToken", token, { accessible: ACCESSIBLE.WHEN_UNLOCKED })
            dispatch(UserTokenHandler(token))
            navigation.replace('BottomTab')
        } catch (error) {
            console.log('user token data set...', error);
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
        console.log('Test....');
        try {
            const res = await connector.connect();
            console.log(res);
            console.log(typeof (res.accounts[0]));
            dispatch(WalletAddressHandler(res.accounts[0]))
            // console.log(res.accounts[0/]);
            if (res.accounts) {
                if (!Boolean(wallertReducerData.isWalletConnected)) {
                    // Open Model to confirm
                    setModalVisible(!modalVisible)
                } else {
                    authenticateWallet(res.accounts[0]);
                }
            }
        } catch (e) {
            console.error(e);
        }
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

    const trustWalletConnectHandler = () => {
        navigation.navigate('BottomTab')
    }
    const DisConnectHandler = async () => {
        try {
            const res1 = await connector.killSession();

            connector.off.killSession();
            console.log(res1);
            // const res2 = await connector.
            // console.log(res2);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.top_container_first}>

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
                    onPress={trustWalletConnectHandler}
                    img2
                />
                {/* <GradientBtn
                    loginBtnText={'Disconnect wallet'}
                    color={globalColor.text_primary_color}
                    marginTop={30}
                    onPress={DisConnectHandler}
                /> */}

            </View>
            <View style={styles.bg_img_top_container}>
                <ImageBackground
                    source={require('../../image/line_group.png')}
                    style={styles.line_bg_style}
                >
                    <Image
                        source={require('../../image/get_start_shape1.png')}
                        style={styles.shape1_bg_style}
                    // blurRadius={}
                    />

                </ImageBackground>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        paddingHorizontal: 25,
                    }}>
                        <View style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            padding: 20,
                            paddingTop: 30,
                        }}>
                            <Text style={{
                                fontSize: 16,
                                color: globalColor.text_secondary_color,
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontFamily: globalFF.montserrate_m,
                            }}>Do You Want Connect the Wallet In Your Account</Text>
                            <Text style={{
                                fontSize: 14,
                                color: globalColor.text_secondary_color,
                                fontFamily: globalFF.montserrate_m,
                                marginVertical: 10,

                            }} > Wallet-Address: {transactiionHaxHandler(wallertReducerData.walletAddress)} </Text>
                            <GradientBtn
                                loginBtnText={'Connect'}
                                color={'#fff'}
                                marginTop={20}
                                onPress={() => {
                                    authenticateWallet(wallertReducerData.walletAddress)
                                    setModalVisible(!modalVisible);
                                }}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </View>

    )
}

export default ConnectWallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: globalColor.bg_primary_color,
        paddingHorizontal: 25,
        zIndex: 1
    },
    top_container_first: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
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
        zIndex: -50
    },
    shape1_bg_style: {
        height: 440,
        width: 440,
        alignItems: 'center',
        position: 'absolute',
        bottom: -120,
        right: -130,
        // zIndex: -50

    },
    bg_img_top_container: {
        position: 'absolute',
        height: '50%',
        width: '100%',
        bottom: 0,



    }
})
