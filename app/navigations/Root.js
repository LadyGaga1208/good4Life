import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import StackHome from './StackHome';
import Cart from '../screens/Cart';
import Notifications from '../screens/Notification';
import Profile from '../screens/Profile';
import { primaryColor, backgroundColorWhite } from '../styles/variables';
import TabStore from './TabStore';

const iconHomeAct = require('../images/icons/homeAct.png');
const iconStoreAct = require('../images/icons/storeAct.png');
const iconCartAct = require('../images/icons/cartAct.png');
const iconNotificationAct = require('../images/icons/notificationAct.png');
const iconProfileAct = require('../images/icons/profileAct.png');

const iconHomeInAct = require('../images/icons/homeInAct.png');
const iconStoreInAct = require('../images/icons/storeInAct.png');
const iconCartInAct = require('../images/icons/cartInAct.png');
const iconNotificationInAct = require('../images/icons/notificationInAct.png');
const iconProfileInAct = require('../images/icons/profileInAct.png');


const Root = TabNavigator(
    {
        Home: {
            screen: StackHome,
        },
        Store: {
            screen: TabStore,
        },
        Cart: { screen: Cart },
        Notification: { screen: Notifications },
        Profile: { screen: Profile }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routerName } = navigation.state;
                let iconName;
                if (routerName === 'Home') {
                    iconName = (focused ? iconHomeAct : iconHomeInAct);
                } else if (routerName === 'Store') {
                    iconName = focused ? iconStoreAct : iconStoreInAct;
                } else if (routerName === 'Cart') {
                    iconName = focused ? iconCartAct : iconCartInAct;
                } else if (routerName === 'Notification') {
                    iconName = focused ? iconNotificationAct : iconNotificationInAct;
                } else if (routerName === 'Profile') {
                    iconName = focused ? iconProfileAct : iconProfileInAct;
                }
                return <Image source={iconName} style={styles.icon} />;
            }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: primaryColor,
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: backgroundColorWhite
            }
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 15,
        height: 15,
        resizeMode: 'stretch'
    }
});

export default Root;
