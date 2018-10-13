import React, { Component } from 'react';
import { View } from 'react-native';
import store from '../../redux/store';

import DefaultPr from './Default';
import ProfileLogin from './ProfileLogin';

export default class Profile extends Component {
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
                    this.state.temp ? <ProfileLogin navigation={this.props.navigation} /> : <DefaultPr navigation={this.props.navigation} />
                }
            </View>
        );
    }
}
