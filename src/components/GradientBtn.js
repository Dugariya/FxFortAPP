import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'
import { globalFF } from '../global/globalFF';
import { globalColor } from '../global/globalcolors';

const GradientBtn = ({
    loginBtnText, bgColor, bgColor2,
    icon_name, icon_color, icon_size,
    color, ...rest
}) => {
    return (
        <TouchableOpacity {...rest} >
            <LinearGradient
                style={[styles.container, { backgroundColor: bgColor }, { ...rest }]} {...rest}
                colors={[globalColor.linear_g_fc, globalColor.linear_g_sc]}
                start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
                locations={[0, 0.8]}
                // angle={45}
                angleCenter={{ x: 0.2, y: 0.2 }}
            >
                {icon_name && <Icon name={icon_name} size={icon_size} color={icon_color} style={{ marginRight: 8 }} />}

                <Text style={[styles.txtStyle, { color: color }]}>{loginBtnText}</Text>

            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GradientBtn
const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 20,
        height: 50,
        // borderRadius: 5,
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 8
    },
    txtStyle: {
        fontSize: 16,
        fontFamily: globalFF.poppins_r,
        fontWeight: 500,
        alignSelf: 'center',

        // fontWeight: 'bold'
    }
})