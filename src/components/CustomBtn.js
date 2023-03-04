import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'
import { globalFF } from '../global/globalFF';
import { globalColor } from '../global/globalcolors';
import { Image } from 'react-native-animatable';

const CustomBtn = ({
    btnText, bgColor, bgColor2,
    icon_name, icon_color, icon_size,
    color, img, img2, ...rest
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: bgColor }, { ...rest }]} {...rest}
        >
            {icon_name && <Icon name={icon_name} size={icon_size} color={icon_color} style={{ marginRight: 8 }} />}

            <Text style={[styles.txtStyle, { color: color }]}>{btnText}</Text>
            {
                img &&
                <Image
                    source={require('../image/google_logo.png')}
                    style={{ height: 30, width: 30, marginLeft: 10 }}
                />
            }
            {
                img2 &&
                <Image
                    source={require('../image/meta_mask_logo.png')}
                    style={{ height: 30, width: 30, marginLeft: 10 }}
                />
            }


        </TouchableOpacity>
    )
}

export default CustomBtn
const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 20,
        height: 50,
        // borderRadius: 5,
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 8,
    },
    txtStyle: {
        fontSize: 16,
        fontFamily: globalFF.poppins_r,
        fontWeight: 500,
        alignSelf: 'center',

        // fontWeight: 'bold'
    }
})