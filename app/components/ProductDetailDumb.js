import React, { PureComponent } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { Rating } from 'react-native-elements';

import { screenHeight, screenWidth } from '../styles/variables';

const iconLove = require('../images/icons/heart.png');
const iconNew1 = require('../images/icons/new1.png');

export default class ProductDetailDumb extends PureComponent {
    render() {
        const { container, wrapper, nameProduct, wrapPrice,
            textPrice, numberPrice, kg, wrapRate, rate, iconStyleLove,
            wrapLove, numberLike, iconNew, wrapContent, wrapIconNew, viewInfor, wrapInf,
            wrapTextInf, wrapTextInf1, textTitle, wrapTextInfStore, textViewStore,
            wrapTextViewStore, wrapTextInf2, wrapDescription, titleDescription,
            titleEating, textDescription } = styles;
        return (
            <View style={container}>
                {/* 
                    Title Product
                */}
                <View style={wrapper}>
                    <Text style={nameProduct}>{this.props.nameProduct}</Text>
                    <View style={wrapContent}>
                        <View>
                            <View style={wrapPrice}>
                                <Text style={textPrice} >đ</Text>
                                <Text style={numberPrice}>{this.props.price}</Text>
                                <Text style={kg}>/{this.props.unit}</Text>
                            </View>
                            <View>
                                <View style={wrapRate}>
                                    <Rating
                                        type="star"
                                        fractions={1}
                                        startingValue={this.props.rate}
                                        readonly
                                        imageSize={15}
                                        style={{ paddingVertical: 1, marginTop: 3 }}
                                    />
                                    <Text style={rate}>
                                        ({this.props.rate}/5)({this.props.rateCount})
                                    </Text>
                                </View>
                                <View style={wrapLove}>
                                    <View style={{ paddingTop: 2, paddingRight: 2 }}>
                                        <Image source={iconLove} style={iconStyleLove} />
                                    </View>
                                    <Text style={numberLike}>({this.props.like})</Text>
                                </View>
                            </View>
                        </View>
                        {/* <View style={wrapIconNew}>
                            <Image source={iconNew1} style={iconNew} />
                        </View> */}
                    </View>
                </View>
                {/* 
                Text Detail    
            */}
                <View>
                    <View style={viewInfor}>
                        <View style={wrapInf}>
                            <View style={wrapTextInf}>
                                <Text style={textTitle}>Trạng thái</Text>
                            </View>
                            <View style={wrapTextInf1}>
                                <Text>Sản phẩm mới</Text>
                            </View>
                        </View>
                        <View style={wrapInf}>
                            <View style={wrapTextInf}>
                                <Text style={textTitle}>Thời gian</Text>
                            </View>
                            <View style={wrapTextInf2}>
                                <Text style={{ color: 'blue' }}>{this.props.start}</Text>
                                <Text> - </Text>
                                <Text style={{ color: 'red' }}>{this.props.end}</Text>
                            </View>
                        </View>
                        <View style={wrapInf}>
                            <View style={wrapTextInf}>
                                <Text style={textTitle}>Số lượng</Text>
                            </View>
                            <View style={wrapTextInf1}>
                                <Text>{this.props.total} {this.props.unit}</Text>
                            </View>
                        </View>
                        <View style={wrapInf}>
                            <View style={wrapTextInf}>
                                <Text style={textTitle}>Cửa hàng</Text>
                            </View>
                            <View style={wrapTextInfStore}>
                                <Text>{this.props.store}</Text>
                                <TouchableOpacity style={wrapTextViewStore} onPress={this.props.goToStore}>
                                    <Text style={textViewStore}>Xem</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={wrapInf}>
                            <View style={wrapTextInf}>
                                <Text style={textTitle}>Danh mục</Text>
                            </View>
                            <View style={wrapTextInf1}>
                                <Text>{this.props.catalogues}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={wrapDescription}>
                        <Text style={titleDescription}>Thông tin sản phẩm</Text>
                        <Text style={textDescription}>{this.props.textDescription}</Text>
                        <Text style={titleEating}>Món ngon chế biến từ sản phẩm</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },

    // Title Product

    wrapper: {
        paddingTop: 5,
        marginLeft: 5
    },
    nameProduct: {
        fontSize: 25,
        color: '#111',
        fontWeight: '300',
        fontFamily: 'Roboto-Thin',
    },
    wrapPrice: {
        flexDirection: 'row',
        marginTop: 1
    },
    textPrice: {
        textDecorationLine: 'underline',
        fontSize: 25,
        paddingLeft: 15,
        paddingTop: 1,
        paddingHorizontal: 3,
        // color: '#e60000',
        color: '#111',
        fontWeight: '400',
        fontFamily: 'Neon'
    },
    numberPrice: {
        fontSize: 30,
        fontWeight: '400',
        // color: '#e60000',
        color: '#111',
        fontFamily: 'Neon'
    },
    kg: {
        paddingTop: 9,
        fontSize: 15,
        fontWeight: '400',
        color: '#111'
    },
    wrapStar: {
        flexDirection: 'row',
        marginTop: 5
    },
    iconStar: {
        width: 29,
        height: 29,
    },
    wrapRate: {
        flexDirection: 'row'
    },
    rate: {
        color: '#111',
        paddingTop: 3
    },
    iconStyleLove: {
        width: 16,
        height: 16,
    },
    wrapLove: {
        flexDirection: 'row',
        paddingTop: 5
    },
    numberLike: {
        color: '#111',
    },
    iconNew: {
        width: 55,
        height: 55,
        resizeMode: 'stretch'
    },
    wrapContent: {
        flexDirection: 'row'
    },
    wrapIconNew: {
        marginTop: 10,
        paddingLeft: 90
    },

    //Text Detail

    viewInfor: {
        marginTop: 20,
        marginLeft: 8
    },
    wrapInf: {
        flexDirection: 'row'
    },
    wrapTextInf: {
        backgroundColor: '#f8f8f8',
        width: 0.23 * screenWidth,
        height: 0.08 * screenHeight,
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapTextInf1: {
        backgroundColor: '#ffffff',
        width: 0.72 * screenWidth,
        height: 0.08 * screenHeight,
        borderColor: '#ddd',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapTextInfStore: {
        backgroundColor: '#ffffff',
        width: 0.72 * screenWidth,
        height: 0.08 * screenHeight,
        borderColor: '#ddd',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textTitle: {
        color: '#111'
    },
    textViewStore: {
        color: '#111',
        fontSize: 13,
        padding: 5
    },
    wrapTextViewStore: {
        marginLeft: 35,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        elevation: 1.5,
        backgroundColor: '#fff'
    },
    wrapTextInf2: {
        backgroundColor: '#ffffff',
        width: 0.72 * screenWidth,
        height: 0.08 * screenHeight,
        borderColor: '#ddd',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    wrapDescription: {
        marginTop: 15,
        marginLeft: 5
    },
    titleDescription: {
        color: '#111',
        fontSize: 18,
        fontStyle: 'italic'
    },
    textDescription: {
        paddingHorizontal: 5,
        fontSize: 15,
        fontFamily: 'Roboto-Thin',
        color: '#111',
        marginTop: 5
    },
    titleEating: {
        color: '#111',
        fontSize: 18,
        fontStyle: 'italic',
        marginTop: 10
    },
});

