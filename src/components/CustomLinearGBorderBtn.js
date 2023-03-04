import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { globalColor } from '../global/globalcolors';
import { globalFF } from '../global/globalFF';

export const CustomLinearGBorderBtn = ({ btn_text, ...rest }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[globalColor.linear_g_fc, globalColor.linear_g_sc]}
                start={{ x: 2.5, y: 0 }} end={{ x: 0, y: 0 }}
                style={styles.grediant}
            >
                <TouchableOpacity style={styles.buttonContainer} {...rest}>
                    <Text style={styles.buttonText}>
                        {btn_text}
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 20,
        // borderRadius: 5,
        marginVertical: 10,
        flexDirection: 'row',
    },
    grediant: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonContainer: {
        flex: 1.0,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: '99%',
        margin: 1
    },
    buttonText: {
        textAlign: 'center',
        color: globalColor.text_primary_color,
        alignSelf: 'center',
        fontFamily: globalFF.poppins_r,
        fontSize: 16,
    }
});