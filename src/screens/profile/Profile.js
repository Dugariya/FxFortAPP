import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyle } from '../../global/globalStyle';
import { globalFF } from '../../global/globalFF';
import { globalColor } from '../../global/globalcolors';
import GradientText from '../../components/GradientText';
import { getData } from '../../api/axios/AxiosAPI';
import { _base_url } from '../../env';
import { UserTokenHandler } from '../../Redux/Action/AuthReducerAction/AuthReducerAction';
import { useDispatch } from 'react-redux';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
const { height } = Dimensions.get('screen')

const Profile = () => {

    const [userData, setUserData] = useState('')
    const Dispatch = useDispatch();
    useEffect(() => {
        fetchUserData();
    }, [])
    const fetchUserData = async () => {
        try {
            const res = await getData(`${_base_url}users/me`);
            // console.log(res);
            setUserData(res)
        } catch (error) {
            console.log(error, 'user data fetch error ...>');
        }
    }
    const logOutHandler = async () => {
        try {
            Dispatch(UserTokenHandler(null))
            const res = await RNSecureStorage.remove('userToken');
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={globalStyle.container}>
            <View style={styles.top_container}>
                <Image
                    source={require('../../image/fxfort_logo.png')}
                    style={styles.top_logo_style}
                />
                <GradientText style={styles.top_text_style}>Fx</GradientText>
                <Text style={styles.top_text_style}>Fort</Text>
            </View>
            <Text style={styles.text_profile_style}>Profile</Text>
            <Image
                source={require('../../image/avtar.png')}
                style={styles.avtar_img_style}
            />
            <View style={styles.text_top_box}>
                <Text style={styles.text_style}>Name: {userData?.fullname}</Text>
                <Text style={styles.text_style}>Mobile No: {userData?.mobile}</Text>
                <Text numberOfLines={1} style={styles.text_style}>Email: {userData?.email}</Text>
            </View>
            <TouchableOpacity
                onPress={() => logOutHandler()}
                style={styles.logout_text_box_style}>
                <Text style={styles.logout_text_style}>Log Out</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
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
    text_profile_style: {
        color: globalColor.text_primary_color,
        fontSize: 28,
        fontFamily: globalFF.poppins_m,
        letterSpacing: 1,
        marginVertical: 10,
    },
    avtar_img_style: {
        height: 62,
        width: 66,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    text_top_box: {
        borderRadius: 15,
        paddingVertical: 15,
        // backgroundColor: '#fff',
        marginVertical: 30,
        borderWidth: 1,
        borderColor: globalColor.linear_g_sc
    },
    text_style: {
        fontSize: 16,
        fontFamily: globalFF.montserrate_m,
        color: globalColor.text_primary_color,
        alignSelf: 'center',
        marginVertical: 5,
    },
    logout_text_style: {
        color: globalColor.text_primary_color,
        fontFamily: globalFF.poppins_m,
        fontSize: 14,

    },
    logout_text_box_style: {
        backgroundColor: globalColor.linear_g_fc,
        position: 'absolute',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        bottom: height / 2 * 0.2,
        right: 25,
    }
})