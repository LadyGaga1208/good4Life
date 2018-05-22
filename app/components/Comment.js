import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';

const iconStar = require('../images/icons/star.png');


export default class Comment extends Component {
    render() {
        const { line, wrapHeaderComment, wrapImgProfile, imgProfile,
            wraprate1, nameUser, iconStarRate, wrapIconStarRate,
            wrapTextComment, commentStyle, wrapTimeComment, commentStyle2 } = styles;
        return (
            <View>
                <View style={line} />
                <View style={wrapHeaderComment}>
                    <View style={wrapImgProfile}>
                        <Image source={{ uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/32595190_203015527167803_6157025275981856768_n.jpg?_nc_cat=0&oh=70e35a3cd0bca1d3645e116da6f776d9&oe=5B8280B3' }} style={imgProfile} />
                    </View>
                    <View style={wraprate1}>
                        <Text style={nameUser}>リトルドラゴン</Text>
                        <View style={wrapIconStarRate}>
                            <Image source={iconStar} style={iconStarRate} />
                            <Image source={iconStar} style={iconStarRate} />
                            <Image source={iconStar} style={iconStarRate} />
                            <Image source={iconStar} style={iconStarRate} />
                            <Image source={iconStar} style={iconStarRate} />
                        </View>
                    </View>
                </View>
                <View style={wrapTextComment}>
                    <Text style={commentStyle2}>{this.props.comment}</Text>
                    <View style={wrapTimeComment}>
                        <Text style={commentStyle}>{this.props.timeComment}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: '#ddd',
        marginTop: 5
    },
    wrapHeaderComment: {
        flexDirection: 'row',
        marginTop: 10
    },
    imgProfile: {
        width: 46,
        height: 46,
        borderRadius: 23,
        borderColor: '#111',
        borderWidth: 1,
    },
    wraprate1: {
        marginTop: 9,
        paddingLeft: 3
    },
    nameUser: {
        color: '#111',
        fontSize: 13
    },
    wrapIconStarRate: {
        flexDirection: 'row'
    },
    iconStarRate: {
        width: 9,
        height: 9,
        resizeMode: 'stretch'
    },
    wrapTextComment: {
        marginLeft: 55,
    },
    wrapTimeComment: {
        flexDirection: 'row'
    },
    commentStyle: {
        fontFamily: 'Roboto-Thin',
        color: '#111',
        fontSize: 11
    },
    commentStyle2: {
        fontFamily: 'Roboto-Thin',
        color: '#111',
        fontSize: 14
    },
});

