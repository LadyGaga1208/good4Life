import React, { PureComponent } from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    StyleSheet
} from 'react-native';
import { Rating } from 'react-native-elements';

import { screenHeight, screenWidth, backgroundColorWhite } from '../styles/variables';

const iconLove = require('../images/icons/heart.png');
const iconStore = require('../images/icons/storeInNewPr.png');


class ItemProduct extends PureComponent {
    render() {
        const { container, imgProduct, wrapPrice, price, nameProduct,
            iconStoreStyle, wrapStore, wrapRate, wrapLike, styleIconLove,
            wrapStar, wrapName, unit } = styles;
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={container} >
                    <Image source={{ uri: `${this.props.imgProduct}` }} style={imgProduct}>
                        <View style={wrapPrice}>
                            <Text style={price}>{this.props.price}</Text>
                            <Text style={unit}>đ</Text>
                        </View>
                    </Image>
                    <View style={wrapName}>
                        <Text style={nameProduct} numberOfLines={2}>{this.props.nameProduct}</Text>
                    </View>
                    <View style={wrapStore}>
                        <Image source={iconStore} style={iconStoreStyle} />
                        <Text style={{ color: '#111' }}>{this.props.nameStore}</Text>
                    </View>
                    <View style={wrapRate}>
                        <View style={wrapLike}>
                            <Image source={iconLove} style={styleIconLove} />
                            <Text style={{ marginTop: 2, color: '#111' }}>{this.props.love}</Text>
                        </View>
                        {/* <View style={wrapStar}>
                            <Image source={iconStar} style={iconStarStyle} />
                            <Image source={iconStar} style={iconStarStyle} />
                            <Image source={iconStar} style={iconStarStyle} />
                            <Image source={iconStar} style={iconStarStyle} />
                            <Image source={iconStar} style={iconStarStyle} />
                            <Text>({this.props.rate})</Text>
                        </View> */}
                        <View style={wrapStar}>
                            <Rating
                                type="star"
                                fractions={1}
                                startingValue={this.props.ratingScore}
                                readonly
                                imageSize={11}
                                style={{ paddingVertical: 1, marginTop: 2 }}
                            />
                            <Text style={{ color: '#111' }}>({this.props.rate})</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: (1.3 / 3) * screenHeight,
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
        // backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    price: {
        fontSize: 18,
        color: 'orange',
        fontWeight: '400',
        fontFamily: 'Neon'
    },
    wrapName: {
        height: '13%',
        paddingHorizontal: 3
    },
    nameProduct: {
        //textAlign: 'center',
        paddingVertical: 1,
        fontSize: 15,
        fontFamily: 'Roboto-Thin',
        color: '#111',
        paddingTop: 2
    },
    unit: {
        textDecorationLine: 'underline',
        fontSize: 17,
        color: 'orange',
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
        marginTop: 8,
        marginRight: 5
    },
    iconStarStyle: {
        marginTop: 4,
        width: 12,
        height: 12
    }
});
export default ItemProduct;
