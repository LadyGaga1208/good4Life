import React, { Component } from 'react';
import { View } from 'react-native';
import store from '../../redux/store';
import NotificationLogin from './NotificationLogin';
import Default from './Default';

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: false
        };
    }

    componentDidMount() {
        const token = store.getState().authReducer.token ? store.getState().authReducer.token : null;
        // console.log(token, 'hehehehe');
        if (token) {
            this.setState({
                temp: true
            });
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.temp ? <NotificationLogin navigation={this.props.navigation} /> : <Default navigation={this.props.navigation} />
                }
            </View>
        );
    }
}
