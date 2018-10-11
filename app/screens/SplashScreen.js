import React, { PureComponent } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { screenHeight, screenWidth } from '../styles/variables';

class SplashScreen extends PureComponent {

    async componentDidMount() {
        try {
            console.log('hihihihi');
            const response = await AsyncStorage.getItem('@token');
            this.props.getTokenSucceeded(JSON.parse(response));
        } catch (error) {
            console.log(error, 'hahaha');
            this.props.getTokenFail();
        }
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'App' })],
        });
        setTimeout(() => this.props.navigation.dispatch(resetAction), 3000);
    }

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
                <Image
                    source={{ uri: 'https://st2.depositphotos.com/5668896/8269/v/950/depositphotos_82691820-stock-illustration-vegetables-background-with-text.jpg' }}
                    style={{
                        width: screenWidth,
                        height: screenHeight,
                        resizeMode: 'stretch'
                    }}
                />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getTokenSucceeded: (token) => {
        dispatch({
            type: 'GET_TOKEN_SUCCEEDED',
            token
        });
    },
    getTokenFail: () => {
        dispatch({
            type: 'GET_TOKEN_FAILED'
        });
    }
});

export default connect(null, mapDispatchToProps)(SplashScreen);

