import { StyleSheet } from 'react-native';
import { globalColor } from './globalcolors';
export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
        paddingHorizontal: 25,
    },
    validate_text_style: {
        color: 'red',
        marginTop: -20,
    },
})