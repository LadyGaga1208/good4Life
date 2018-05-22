import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

import { primaryColor } from '../../styles/variables';

class ProductStore extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerTitle: `${params.data.storeName}`,
            headerStyle: {
                backgroundColor: primaryColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    }

    render() {
        return (
            <View>
                <Text> ProductStore </Text>
            </View>
        );
    }
}

export default ProductStore;
