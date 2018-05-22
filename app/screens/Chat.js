import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

class Chat extends PureComponent {

    static navigationOptions = {
        tabBarVisible: false
    }
    
    render() {
        return (
            <View>
                <Text> Chat </Text>
            </View>
        );
    }
}

export default Chat;
