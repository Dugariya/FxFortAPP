import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { globalFF } from '../global/globalFF'
import { globalColor } from '../global/globalcolors';
import Icon from 'react-native-vector-icons/Ionicons'

const CustomTextInput = ({ top_text, placeholder_text, close, isVisible, ...rest }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.top_text_style}>{top_text}</Text>
            <TextInput
                placeholder={placeholder_text}
                placeholderTextColor={'#868181'}
                secureTextEntry={isVisible}
                {...rest}
                style={{
                    paddingLeft: -5,
                    fontSize: 12,
                    lineHeight: 18,
                    fontFamily: globalFF.poppins_r,
                    color: globalColor.text_primary_color
                }}
            />
            {close === false &&
                <Icon name={'close-circle'} size={14} color={globalColor.text_primary_color} style={styles.close_icon_style} />
            }
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container: {
        height: 60,
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        marginBottom: 25,
    },
    top_text_style: {
        fontFamily: globalFF.poppins_m,
        color: globalColor.text_primary_color,
        fontSize: 16,
        marginBottom: -8
    },
    close_icon_style: {
        position: 'absolute',
        right: 0,
        bottom: 10
    }
})