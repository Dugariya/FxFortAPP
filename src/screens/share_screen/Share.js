import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalColor } from '../../global/globalcolors';
import GradientBtn from '../../components/GradientBtn';
import { globalFF } from '../../global/globalFF';
import Icon from "react-native-vector-icons/MaterialIcons";

const Share = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.share_now_text_style}>Refer Now</Text>
                <View style={styles.referral_top_box}>
                    <Text style={styles.referral_text_style}>referral link</Text>

                    <View style={{ flexDirection: 'row', }}>
                        <Text numberOfLines={1} style={styles.referral_link_text_style}>https://fxfort.com/?ref=35bSzXvRKL7cVe3</Text>
                        <TouchableOpacity>
                            <Icon name={'content-copy'} size={18} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <GradientBtn
                    loginBtnText={'Share'}
                    color={globalColor.text_primary_color}
                    marginTop={15}
                />

                <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: 10 }}>
                    <Text style={styles.total_num_peopel_text_style}>Total no. of people using your referral link </Text>
                    <Text style={styles.total_num_peopel_text2_style}>154</Text>
                </View>
            </View>
            <View style={styles.hr_line_box_style}>
                <Text style={{
                    fontFamily: globalFF.montserrat_b,
                    color: '#fff'
                }}>Stages</Text>
                <Text style={{
                    fontFamily: globalFF.montserrat_b,
                    color: '#fff'
                }} >Bonus (in FxF)</Text>
            </View>
            <ScrollView>
                <View style={styles.vertical_line_top_container}>
                    <View style={styles.vertical_line1_top_inner_container}>
                        <Text style={styles.stage_text_style}>Stage1</Text>
                        <Text style={styles.stage_text_style}>Stage2</Text>
                        <Text style={styles.stage_text_style}>Stage3</Text>
                        <Text style={styles.stage_text_style}>Stage4</Text>
                        <Text style={styles.stage_text_style}>Stage5</Text>
                        <Text style={styles.stage_text_style}>Stage6</Text>
                        <Text style={styles.stage_text_style}>Stage7</Text>
                    </View>
                    <View style={styles.vertical_line2_top_inner_container}>
                        <View style={styles.stage_btn_style}>
                            <Text style={styles.center_text_style}>5</Text>
                        </View>
                        <View style={styles.stage_btn_style}>
                            <Text style={styles.center_text_style}>25</Text>
                        </View>
                        <View style={[styles.stage_btn_style, { backgroundColor: '#6b6bff' }]}>
                            <Text style={styles.center_text_style}>75</Text>
                        </View>
                        <View style={[styles.stage_btn_style, { backgroundColor: '#8d8dff' }]}>
                            <Text style={styles.center_text_style}>5</Text>
                        </View>
                        <View style={[styles.stage_btn_style, { backgroundColor: '#B5B5FF' }]}>
                            <Text style={styles.center_text_style}>25</Text>
                        </View>
                        <View style={[styles.stage_btn_style, { backgroundColor: '#E0E0FF' }]}>
                            <Text style={[styles.center_text_style, { color: '#000' }]}>75</Text>
                        </View>
                        <View style={[styles.stage_btn_style, { backgroundColor: '#ffffff' }]}>
                            <Text style={[styles.center_text_style, { color: '#000' }]}>15</Text>
                        </View>

                    </View>
                    <View style={styles.vertical_line3_top_inner_container}>
                        <Text style={styles.stage_text_style}>15</Text>
                        <Text style={styles.stage_text_style}>15</Text>
                        <Text style={styles.stage_text_style}>0</Text>
                        <Text style={styles.stage_text_style}>0</Text>
                        <Text style={styles.stage_text_style}>0</Text>
                        <Text style={styles.stage_text_style}>0</Text>
                        <Text style={styles.stage_text_style}>0</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default Share

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColor.bg_primary_color,
    },
    top_container: {
        paddingHorizontal: 25,

    },
    share_now_text_style: {
        fontFamily: globalFF.montserrat_b,
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 40,
        color: globalColor.text_primary_color,
        marginTop: 50,
    },
    referral_top_box: {
        height: 56,
        backgroundColor: 'rgba(45, 45, 45, 0.7)',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
    },
    referral_link_text_style: {
        fontFamily: globalFF.montserrate_s_b,
        color: globalColor.text_primary_color,
        width: 300,
        fontSize: 16,
    },
    referral_text_style: {
        fontFamily: globalFF.montserrate_s_b,
        color: '#8c8c8c',
        fontSize: 14,
    },
    total_num_peopel_text_style: {
        fontSize: 14,
        fontFamily: globalFF.montserrate_s_b,
        color: '#808080',

    },
    total_num_peopel_text2_style: {
        fontSize: 24,
        fontFamily: globalFF.montserrate_s_b,
        color: '#fff',

    },

    hr_line_box_style: {
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#fff',
        marginTop: 29,
        height: 50,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 15
    },
    vertical_line_top_container: {
        flexDirection: 'row'
    },
    vertical_line1_top_inner_container: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',

    },
    vertical_line2_top_inner_container: {
        paddingTop: 20,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#fff',
        flex: 1,
        alignItems: 'center',


    },
    vertical_line3_top_inner_container: {
        paddingTop: 20,
        alignItems: 'center',
        flex: 1,
    },
    stage_text_style: {
        color: '#fff',
        marginVertical: 22
    },
    stage_btn_style: {
        height: 48,
        width: 94,
        borderRadius: 50,
        backgroundColor: '#2424fe',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 9
    },
    center_text_style: {
        color: '#fff',
        fontFamily: globalFF.poppins_r,
        fontSize: 16,

    }

})