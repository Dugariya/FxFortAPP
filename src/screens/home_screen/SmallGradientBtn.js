import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalFF } from '../../global/globalFF'
import { globalColor } from '../../global/globalcolors'
import LinearGradient from 'react-native-linear-gradient'

const SmallGradientBtn = ({ btn_name, ...rest }) => {
    return (
        <TouchableOpacity
            style={[styles.sell_btn_box_style, { ...rest }]}
            {...rest}>
            <LinearGradient
                // style={[styles.sell_btn_box_style, { ...rest }]}
                style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', ...rest }}
                colors={[globalColor.linear_g_fc, globalColor.linear_g_sc]}
                start={{ x: 0.9, y: 0 }} end={{ x: 0, y: 0 }}
                locations={[0, 0.8]}
                // angle={45}
                angleCenter={{ x: 0.2, y: 0.2 }}
            >
                <Text style={styles.sell_btn_text_style}>{btn_name}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default SmallGradientBtn

const styles = StyleSheet.create({
    sell_btn_box_style: {
        width: '48%',
        marginHorizontal: 0,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#fff'
    },
    sell_btn_text_style: {
        color: globalColor.text_primary_color,
        fontFamily: globalFF.montserrate_s_b,
        fontSize: 16,
    },
})