import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { globalColor } from '../../global/globalcolors';
import { useNavigation } from '@react-navigation/native';
import { globalFF } from '../../global/globalFF';
const OrderHeader = ({ name }) => {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: 25, marginBottom: 30 }}>
            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle" size={26} color="white" />
            </TouchableOpacity>
            <Text style={{
                fontSize: 40,
                color: globalColor.bg_secondary_color,
                fontFamily: globalFF.montserrat_b,
                width: 250,
                lineHeight: 40
            }}>{name}</Text>
        </View>
    )
}

export default OrderHeader