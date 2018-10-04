import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';

import { screenHeight, screenWidth } from '../styles/variables';

export default class Profile extends Component {
    render() {
        const { container, top, img, avatar, wrap, wrapName, wrapImg } = styles;
        return (
            <View style={container}>
                <View style={top}>
                    <ImageBackground source={{ uri: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/248680_146029758883933_1656016426_n.jpg?_nc_cat=0&oh=70a679da6a83b4f0798da17212f98878&oe=5C0004B1' }} style={img} resizeMode='stretch'
                    >
                        <View style={wrap}>
                            <View style={wrapImg}>
                                <Image
                                    source={{ uri: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/19554954_830684580418444_953522966191010168_n.jpg?_nc_cat=0&oh=787f063eff716347c9abf9eb3337a428&oe=5C0A3471' }}
                                    style={avatar}
                                />
                            </View>
                            <View style={wrapName}>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {

    },
    img: {
        width: screenWidth,
        height: 0.3 * screenHeight,
    },
    wrap: {
        marginTop: 0.15 * screenHeight,
        flexDirection: 'row'
    },
    avatar: {
        width: 60,
        height: 60,
        resizeMode: 'stretch',
        borderColor: '#fff',
        borderWidth: 2,
    },
    wrapImg: {
        width: 62,
        height: 62,
        borderRadius: 31,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        overflow: 'hidden',
    }
});

