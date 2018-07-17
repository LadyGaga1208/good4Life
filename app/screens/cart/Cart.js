import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { data } from './CartApi';

class Cart extends Component {

    renderItemProduct({ item }) {
        return (
            <View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>
        );
    }

    renderItems({ item }) {
        return (
            <View>
                <Text>{item.nameStore}</Text>
                <FlatList
                    data={item.product}
                    renderItem={this.renderItemProduct.bind(this)}
                    keyExtractor={(item) => item.productId.toString()}
                />
            </View>
        );
    }
    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={this.renderItems.bind(this)}
                    keyExtractor={(item) => item.storeId.toString()}
                />
            </View>
        )
    }
}

export default Cart;