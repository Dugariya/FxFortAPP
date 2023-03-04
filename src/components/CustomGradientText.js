import React from "react";
import { Text } from "react-native";
// import MaskedView from "@react-native-community/masked-view";
import MaskedView from '@react-native-masked-view/masked-view';

import LinearGradient from "react-native-linear-gradient";
import { globalColor } from '../global/globalcolors';

const CustomGradientText = (props) => {
    return (
        <MaskedView maskElement={<Text {...props} />}>
            <LinearGradient
                colors={[globalColor.linear_g_text_fc, globalColor.linear_g_text_sc]}
                start={{ x: 3, y: 0 }}
                end={{ x: 0, y: 0 }}
                focusable={true}

            >
                <Text {...props} style={[props.style, { opacity: 0 }]} />
            </LinearGradient>
        </MaskedView>
    );
};

export default CustomGradientText;