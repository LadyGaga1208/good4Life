import React, { PureComponent } from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    StyleSheet
} from 'react-native';
import { Rating } from 'react-native-elements';

import { screenHeight, screenWidth, backgroundColorWhite, primaryColor } from '../styles/variables';

const iconLove = require('../images/icons/heart.png');
const iconStar = require('../images/icons/star.png');
const iconStore = require('../images/icons/storeInNewPr.png');


class ItemProductSuggest extends PureComponent {
    render() {
        const { container, imgProduct, wrapPrice, price, nameProduct,
            iconStoreStyle, wrapStore, wrapRate, wrapLike, styleIconLove,
            wrapStar, iconStarStyle, unit, nameStore, textRate } = styles;
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={container}>
                    <Image source={{ uri: `${this.props.imgProduct}` }} style={imgProduct}>
                        <View style={wrapPrice}>
                            <Text style={price}>{this.props.price}</Text>
                            <Text style={unit}>đ</Text>
                        </View>
                    </Image>
                    <Text style={nameProduct}>{this.props.nameProduct}</Text>
                    <View style={wrapStore}>
                        <Image source={iconStore} style={iconStoreStyle} />
                        <Text style={nameStore}>{this.props.nameStore}</Text>
                    </View>
                    <View style={wrapRate}>
                        <View style={wrapLike}>
                            <Image source={iconLove} style={styleIconLove} />
                            <Text style={textRate}>{this.props.love}</Text>
                        </View>
                        <View style={wrapStar}>
                            <Rating
                                type="star"
                                fractions={1}
                                startingValue={this.props.ratingScore}
                                readonly
                                imageSize={9}
                                style={{ paddingVertical: 1, marginTop: 2 }}
                            />
                            <Text style={textRate}>({this.props.rate})</Text>
                        </View>
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
        marginLeft: 7,
        backgroundColor: backgroundColorWhite,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 5
    },
    imgProduct: {
        height: (0.65 / 3) * screenHeight,
        resizeMode: 'stretch',
        justifyContent: 'flex-end'
    },
    wrapPrice: {
        height: (0.14 / 3) * screenHeight,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    price: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: '400',
        fontFamily: 'Neon'
    },
    nameProduct: {
        textAlign: 'center',
        paddingVertical: 1,
        fontSize: 14,
        fontFamily: 'Comfortaa-Bold',
        color: primaryColor,
        paddingTop: 2
    },
    unit: {
        textDecorationLine: 'underline',
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '400',
        fontFamily: 'Neon',
        paddingLeft: 4
    },
    wrapStore: {
        flexDirection: 'row',
        paddingTop: 5
    },
    iconStoreStyle: {
        width: 13,
        height: 13,
        resizeMode: 'stretch',
        marginHorizontal: 3
    },
    wrapRate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2
    },
    wrapLike: {
        flexDirection: 'row',
        marginTop: 4
    },
    styleIconLove: {
        marginLeft: 3,
        marginRight: 1,
        marginTop: 2,
        width: 12,
        height: 12
    },
    wrapStar: {
        flexDirection: 'row',
        marginTop: 4,
        marginRight: 2
    },
    iconStarStyle: {
        marginTop: 2,
        width: 10,
        height: 10
    },
    nameStore: {
        width: '80%',
        fontSize: 12
    },
    textRate: {
        fontSize: 10,
        marginTop: 1
    }
});
export default ItemProductSuggest;
