import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/home_screen/Home';
import Order from '../../screens/order_screen/Order';
import Reward from '../../screens/reward_screen/Reward';
import Share from '../../screens/share_screen/Share';
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();


const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#6ED2F9"
            inactiveColor="#2628FE"
            shifting={true}
            barStyle={{
                backgroundColor: '#212125',
                height: 70,
                borderTopColor: '#6ed2f9',
                borderTopWidth: 1
            }}
            labeled={false}
        >
            <Tab.Screen name="Home" component={Home}

                options={{
                    tabBarIcon: () => {
                        return <Icon name='home' size={24} color={'#4143e1'} />
                    },
                    tabBarColor: '#2424fe6c',

                }}
            />
            <Tab.Screen name="Order" component={Order}
                options={{
                    tabBarIcon: () => <Icon name='cart' size={24} color={'#4143e1'} />,
                    tabBarColor: '#2424fe6c'
                }}
            />
            <Tab.Screen name="Reward" component={Reward}
                options={{
                    tabBarIcon: () => <Icon name='gift' size={24} color={'#4143e1'} />,
                    tabBarColor: '#2424fe6c'

                }}
            />
            <Tab.Screen name="Share" component={Share}
                options={{
                    tabBarIcon: () => <Icons name='screen-share' size={24} color={'#4143e1'} />,
                    tabBarColor: '#2424fe6c'

                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})

