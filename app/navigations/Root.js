import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import StackHome from './StackHome';
import Cart from '../screens/cart/Cart';
import Notifications from '../screens/Notification';
import StackProfile from './StackProfile';
import SplashScreen from '../screens/SplashScreen';
import { primaryColor, backgroundColorWhite } from '../styles/variables';
import TabStore from './TabStore';
import IconCart from '../screens/cart/IconCart';

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


const App = TabNavigator(
    {
        Home: {
            screen: StackHome,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    const iconName = focused ? iconHomeAct : iconHomeInAct;
                    return <Image source={iconName} />;
                }
            }
        },
        Store: {
            screen: TabStore,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    const iconName = focused ? iconStoreAct : iconStoreInAct;
                    return <Image source={iconName} />;
                }
            }
        },
        Cart: {
            screen: Cart,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    const iconName = focused ? iconCartAct : iconCartInAct;
                    return <IconCart source={iconName} />;
                }
            }
        },
        Notification: {
            screen: Notifications,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    const iconName = focused ? iconNotificationAct : iconNotificationInAct;
                    return <Image source={iconName} />;
                }
            }
        },
        Profile: {
            screen: StackProfile,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    const iconName = focused ? iconProfileAct : iconProfileInAct;
                    return <Image source={iconName} />;
                }
            }
        }
    },
    {
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

const Root = StackNavigator(
    {
        App: { screen: App },
        SplashScreen: { screen: SplashScreen }
    },
    {
        navigationOptions: {
            header: null
        },
        initialRouteName: 'SplashScreen'
    }
);

export default Root;
