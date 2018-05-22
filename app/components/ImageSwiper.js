import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import { screenHeight, screenWidth } from '../styles/variables';

export default class ImageSwiper extends Component {
    render() {
        const { viewSwiper, wrapSwiper, bannerStyle } = styles;
        return (
            <View style={viewSwiper}>
                <Swiper style={wrapSwiper}>
                    <Image source={{ uri: `${this.props.source1}` }} style={bannerStyle} />
                    <Image source={{ uri: `${this.props.source2}` }} style={bannerStyle} />
                    <Image source={{ uri: `${this.props.source3}` }} style={bannerStyle} />
                    <Image source={{ uri: `${this.props.source4}` }} style={bannerStyle} />
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewSwiper: {
        height: 0.42 * screenHeight,
        width: screenWidth,
    },
    wrapSwiper: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    bannerStyle: {
        height: 0.42 * screenHeight,
        width: screenWidth,
        resizeMode: 'stretch'
    },
});

