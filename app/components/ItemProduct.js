import React, { PureComponent } from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    StyleSheet
} from 'react-native';

import { screenHeight, screenWidth, backgroundColorWhite, primaryColor } from '../styles/variables';

const iconLove = require('../images/icons/heart.png');
const iconStar = require('../images/icons/star.png');
const iconStore = require('../images/icons/storeInNewPr.png');


class ItemProduct extends PureComponent {
    render() {
        const { container, imgProduct, wrapPrice, price, nameProduct,
            iconStoreStyle, wrapStore, wrapRate, wrapLike, styleIconLove,
            wrapStar, iconStarStyle, unit } = styles;
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={container} >
                    <Image source={{ uri: `${this.props.imgProduct}` }} style={imgProduct}>
                        <View style={wrapPrice}>
                            <Text style={price}>{this.props.price}</Text>
                            <Text style={unit}>đ</Text>
                        </View>
                    </Image>
                    <Text style={nameProduct}>{this.props.nameProduct}</Text>
                    <View style={wrapStore}>
                        <Image source={iconStore} style={iconStoreStyle} />
                        <Text>{this.props.nameStore}</Text>
                    </View>
                    <View style={wrapRate}>
                        <View style={wrapLike}>
                            <Image source={iconLove} style={styleIconLove} />
                            <Text>{this.props.love}</Text>
                        </View>
                        <View style={wrapStar}>
                            <Image source={iconStar} style={iconStarStyle} />
                            <Image source={iconStar} style={iconStarStyle} />
                            <Image source={iconStar} style={iconStarStyle} />
                            <Image source={iconStar} style={iconStarStyle} />
                            <Image source={iconStar} style={iconStarStyle} />
                            <Text>({this.props.rate})</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: (1.25 / 3) * screenHeight,
        width: 0.47 * screenWidth,
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
        height: (0.86 / 3) * screenHeight,
        resizeMode: 'stretch',
        justifyContent: 'flex-end'
    },
    wrapPrice: {
        height: (0.16 / 3) * screenHeight,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    price: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '400',
        fontFamily: 'Neon'
    },
    nameProduct: {
        textAlign: 'center',
        paddingVertical: 1,
        fontSize: 15,
        fontFamily: 'Comfortaa-Bold',
        color: primaryColor,
        paddingTop: 3
    },
    unit: {
        textDecorationLine: 'underline',
        fontSize: 17,
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
        width: 18,
        height: 18,
        resizeMode: 'stretch',
        marginHorizontal: 5
    },
    wrapRate: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapLike: {
        flexDirection: 'row',
        marginTop: 5
    },
    styleIconLove: {
        marginLeft: 5,
        marginRight: 3,
        marginTop: 4,
        width: 15,
        height: 15
    },
    wrapStar: {
        flexDirection: 'row',
        marginTop: 5,
        marginRight: 5
    },
    iconStarStyle: {
        marginTop: 4,
        width: 12,
        height: 12
    }
});
export default ItemProduct;
