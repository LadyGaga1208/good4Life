import React, { PureComponent } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';

import { screenHeight, screenWidth } from '../styles/variables';

const iconPrice = require('../images/icons/price.png');
const iconStore = require('../images/icons/storeInNewPr.png');

export default class ItemNewProduct extends PureComponent {
    render() {
        const { container, img, wrapTime, time, wrapNamePr,
            namePr, wrapPrice, icon, price, unit, wrapStore, store } = styles;
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={container}>
                    <Image source={{ uri: `${this.props.uri}` }} style={img}>
                        <View style={wrapTime}>
                            <Text style={time}>08:12:00</Text>
                        </View>
                    </Image>
                    <View style={wrapNamePr}>
                        <Text style={namePr}>{this.props.name}</Text>
                    </View>
                    <View style={wrapPrice}>
                        <Image source={iconPrice} style={icon} />
                        <Text style={price}>{this.props.price}</Text>
                        <Text style={unit}>đ</Text>
                    </View>
                    <View style={wrapStore}>
                        <Image source={iconStore} style={icon} />
                        <Text style={store} numberOfLines={1}>{this.props.store}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: (1 / 3) * screenHeight,
        width: (2 / 5) * screenWidth,
        margin: 5,
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    img: {
        height: 0.6 * ((1 / 3) * screenHeight),
        width: '100%',
        resizeMode: 'stretch',
        justifyContent: 'flex-end'
    },
    wrapTime: {
        height: 0.13 * ((1 / 3) * screenHeight),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        color: '#ffffff',
        fontFamily: 'Neon',
        fontSize: 17
    },
    wrapNamePr: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    namePr: {
        color: '#008296',
        fontSize: 15,
        padding: 3,
        fontFamily: 'Comfortaa-Regular',
    },
    wrapPrice: {
        flexDirection: 'row',
        marginTop: 5
    },
    icon: {
        width: 16,
        height: 16,
        resizeMode: 'stretch',
        marginHorizontal: 5
    },
    price: {
        color: '#879596'
    },
    unit: {
        textDecorationLine: 'underline',
        color: '#879596',
        paddingLeft: 2
    },
    wrapStore: {
        flexDirection: 'row',
        marginTop: 6
    },
    store: {
        fontSize: 13,
        color: '#879596',
        width: '80%'
    }
});
