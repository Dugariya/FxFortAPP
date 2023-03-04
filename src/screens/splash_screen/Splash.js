import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { globalColor } from '../../global/globalcolors'
import { globalFF } from '../../global/globalFF'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStart')
        }, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={require('../../image/fxfort_logo.png')}
                style={styles.logo_style}
            />
            <View style={styles.text_box}>
                <Animatable.Text animation={'slideInLeft'} style={styles.txt_style}>Fx</Animatable.Text>
                <Animatable.Text animation={'slideInUp'} style={styles.txt_style}>Fo</Animatable.Text>
                <Animatable.Text animation={'slideInRight'} style={styles.txt_style}>rt</Animatable.Text>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo_style: {
        height: 137,
        width: 137,
    },
    txt_style: {
        color: globalColor.text_primary_color,
        fontSize: 45,
        alignSelf: 'center',
        fontFamily: globalFF.poppins_bold

    },
    text_box: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }

})