import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { screenHeight, screenWidth } from '../styles/variables';

const iconStar = require('../images/icons/star.png');
const iconFollow = require('../images/icons/follower.png');
const iconFollowme = require('../images/icons/followme.png');


class ProductDetail extends Component {
    render() {
        const { wrapNameStore,
            wrapLogo, logo, styleName, icon, wrapIcon, rate, wrapRate, iconFollowStyle,
            iconFollowmeStyle, wrapFollow, wrapIconFollow, wrapIconFollowme,
            numberFollow, textFollow, slogan, wrapTextInf, wrapTextInf1, wrapInf, viewInfor,
            textTitle, wrapDescription, titleDescription, textDescription } = styles;
        return (
            <View>
                <View style={wrapNameStore}>
                    <View style={wrapLogo}>
                        <Image source={{ uri: `${this.props.logo}` }} style={logo} />
                    </View>
                    <View>
                        <Text style={styleName} numberOfLines={2}>{this.props.nameStore}</Text>
                        <View style={wrapRate}>
                            <View style={wrapIcon}>
                                <Image source={iconStar} style={icon} />
                                <Image source={iconStar} style={icon} />
                                <Image source={iconStar} style={icon} />
                                <Image source={iconStar} style={icon} />
                                <Image source={iconStar} style={icon} />
                            </View>
                            <Text style={rate}>({this.props.rate}/5)</Text>
                        </View>
                        <View style={wrapFollow}>
                            <View style={wrapIconFollow}>
                                <Image source={iconFollow} style={iconFollowStyle} />
                                <Text style={numberFollow}>({this.props.follow})</Text>
                            </View>
                            <View style={wrapIconFollowme}>
                                <Image source={iconFollowme} style={iconFollowmeStyle} />
                                <Text style={textFollow}>follow</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={slogan}>{this.props.slogan}</Text>
                </View>
                <View style={viewInfor}>
                    <View style={wrapInf}>
                        <View style={wrapTextInf}>
                            <Text style={textTitle}>SĐT</Text>
                        </View>
                        <View style={wrapTextInf1}>
                            <Text>{this.props.phone}</Text>
                        </View>
                    </View>
                    <View style={wrapInf}>
                        <View style={wrapTextInf}>
                            <Text style={textTitle}>Website</Text>
                        </View>
                        <View style={wrapTextInf1}>
                            <Text>{this.props.website}</Text>
                        </View>
                    </View>
                    <View style={wrapInf}>
                        <View style={wrapTextInf}>
                            <Text style={textTitle}>Địa chỉ</Text>
                        </View>
                        <View style={wrapTextInf1}>
                            <Text>{this.props.address}</Text>
                        </View>
                    </View>
                </View>
                <View style={wrapDescription}>
                    <Text style={titleDescription}>Thông tin cửa hàng</Text>
                    <Text style={textDescription}>Bác Tôm được xem là thương hiệu đi tiên phong trong lĩnh vực rau và thực phẩm sạch ở Hà Nội. Bắt đầu từ một cửa hàng nhỏ ban đầu ở Nguyễn Công Trứ, giờ Bác Tôm đã có đến 5 điểm bán hàng ở khắp thành phố, bán từ 5h30 đến 19 giờ hàng ngày.</Text>
                </View>
            </View>
        );
    }
}
const styles = {
    wrapNameStore: {
        flexDirection: 'row',
        paddingTop: 5
    },
    wrapLogo: {
        borderWidth: 1,
        borderColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 2,
        marginHorizontal: 2,
        width: 0.27 * screenWidth,
        height: 0.15 * screenHeight,
    },
    logo: {
        width: 0.25 * screenWidth,
        height: 0.14 * screenHeight,
        resizeMode: 'stretch',
    },
    styleName: {
        // fontFamily: 'coolvetica rg',
        fontSize: 19,
        color: '#111',
        width: '100%'
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
    },
    wrapIcon: {
        flexDirection: 'row',
        paddingTop: 2
    },
    rate: {
        fontSize: 17,
        color: '#111',
        marginBottom: 4,
        paddingRight: 2,
    },
    wrapRate: {
        flexDirection: 'row',
    },
    wraprate1: {
        marginTop: 9,
        paddingLeft: 3
    },
    iconFollowmeStyle: {
        width: 18,
        height: 18,
        resizeMode: 'stretch'
    },
    iconFollowStyle: {
        width: 18,
        height: 18,
        resizeMode: 'stretch',
        marginTop: 2
    },
    wrapFollow: {
        flexDirection: 'row',
        marginTop: 2,
        justifyContent: 'space-between'
    },
    wrapIconFollow: {
        flexDirection: 'row',
    },
    wrapIconFollowme: {
        marginLeft: 0.28 * screenWidth,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#111',
        padding: 3,
        borderRadius: 5,
        elevation: 2
    },
    numberFollow: {
        fontSize: 15,
        color: '#111'
    },
    textFollow: {
        color: '#111'
    },
    slogan: {
        marginTop: 15,
        fontFamily: 'ItalianBreakfast-Regular',
        fontSize: 25,
        textAlign: 'center',
        color: '#9900cc'
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
    viewInfor: {
        marginTop: 15,
        marginLeft: 8
    },
    textTitle: {
        color: '#111'
    },
    wrapDescription: {
        marginTop: 15,
        marginLeft: 5
    },
    titleDescription: {
        color: '#111',
        fontSize: 16,
        fontStyle: 'italic'
    },
    textDescription: {
        marginTop: 10,
        paddingHorizontal: 5,
        fontSize: 15,
        fontFamily: 'Roboto-Thin',
        color: '#111'
    },
    wrapComment: {
        marginTop: 10,
        marginLeft: 5,
    },
    imgProfile: {
        width: 46,
        height: 46,
        borderRadius: 23,
        borderColor: '#111',
        borderWidth: 1,
    },
    wrapImgProfile: {
    },
    iconStarRate: {
        width: 9,
        height: 9,
        resizeMode: 'stretch'
    },
    wrapIconStarRate: {
        flexDirection: 'row'
    },
    wraprate: {
        marginLeft: 5,
        marginTop: 5
    },
    wrapHeaderComment: {
        flexDirection: 'row',
        marginTop: 10
    },
    nameUser: {
        color: '#111',
        fontSize: 13
    },
    wrapTextComment: {
        marginLeft: 55,
    },
    wrapTimeComment: {
        flexDirection: 'row'
    },
    commentStyle: {
        fontFamily: 'Roboto-Thin',
        color: '#111'
    },
    commentStyle2: {
        marginHorizontal: 5,
        fontFamily: 'Roboto-Thin',
        color: '#111'
    },
    textInputStyle: {
        width: '75%',
        marginLeft: 5
    },
    wrapStar: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        width: 0.6 * screenWidth,
        height: 0.06 * screenHeight,
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 2,
        marginLeft: 10,
        marginTop: 10
    },
    textLove: {
        fontSize: 18
    },
    wrapIconStar: {
        flexDirection: 'row'
    }
};

export default ProductDetail;
