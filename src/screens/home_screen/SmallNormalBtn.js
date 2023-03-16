import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalColor } from '../../global/globalcolors'
import { globalFF } from '../../global/globalFF'

const SmallNormalBtn = ({ btn_name, ...rest }) => {
    return (
        <TouchableOpacity
            {...rest}
            style={[styles.sell_btn_box_style, { ...rest }]}>
            <Text style={styles.sell_btn_text_style}>{btn_name}</Text>
        </TouchableOpacity>
    )
}

export default SmallNormalBtn

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