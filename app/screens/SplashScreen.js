import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, Animated, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import LottieView from 'lottie-react-native';

import { screenHeight, screenWidth } from '../styles/variables';

const img = require('../images/imgSplash.png');

export default class SplashScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            opacity: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 5000,
        }).start();
    }

    // componentDidMount() {
    //     this.animation.play(30, 120);

    //     // const resetAction = NavigationActions.reset({
    //     //     index: 0,
    //     //     actions: [NavigationActions.navigate({ routeName: 'App' })],
    //     // });
    //     // setTimeout(() => this.props.navigation.dispatch(resetAction), 1000);
    // }

    //     render() {
    //         return (
    //             <View style={styles.container}>
    //                 <Image
    //                     source={img}
    //                     style={styles.img}
    //                 />
    //             </View>
    //         );
    //     }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View
                    style={{
                        opacity: this.state.opacity,
                        flex: 1,
                        justifyContent: 'center', alignItems: 'center'
                    }}
                >
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        source={require('../animations/funky_chicken.json')}
                        autoPlay
                        loop
                        style={{ width: 200, height: 200 }}
                    />
                </Animated.View>
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     img: {
//         height: screenHeight,
//         width: screenWidth,
//         resizeMode: 'stretch'
//     },
// });

