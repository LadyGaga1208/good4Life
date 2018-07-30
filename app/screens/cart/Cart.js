import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { screenHeight, screenWidth, primaryColor } from '../../styles/variables';
import { getCart } from '../../redux/action/cart';
import ItemCart from '../../components/ItemCart';
import { url } from '../../api/ApiService';

const check = require('../../images/icons/circle.png');
const checked = require('../../images/icons/checked.png');
const cancel = require('../../images/icons/cancel.png');

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: null
        };
    }

    componentDidMount() {
        this.props.getCart();
    }

    total() {
        const arrayStoreMarked = this.props.cart.filter((item) => item.itemsStore.marked === true);
        console.log(arrayStoreMarked);
        const arraySum = [];
        for (const item of arrayStoreMarked) {
            const arrayProductMarked = item.itemsProduct.filter((a) => a.marked === true);
            const sum = arrayProductMarked.reduce((accumulator, currentValue) => accumulator + (currentValue.product.unitPrice * currentValue.quantity));
            arraySum.push(sum);
        }
        console.log(arraySum);
        const total = arraySum.reduce((accumulator, currentValue) => accumulator + currentValue);
        return total;
    }

    renderItemProduct({ item }) {
        return (
            <ItemCart
                checked={item.marked}
                imgProduct={`${url}/product/${item.product.productId}/${item.product.imagePath}.png`}
                nameProduct={item.product.productName}
                price={item.product.unitPrice}
                onChangeText={(number) => (this.setState({
                    number
                }))}
                defaultValue={item.quantity}
            />
        );
    }

    renderItems({ item }) {
        return (
            <View>
                <View style={styles.wrapItemStore}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            source={item.itemsStore.marked ? checked : check}
                            tintColor={item.itemsStore.marked ? 'orange' : '#111'}
                            style={styles.imgCheck}
                        />
                        <View>
                            <Text style={styles.nameStore}>{item.itemsStore.store.storeName}</Text>
                        </View>
                    </View>
                    <View>
                        <Image
                            source={cancel}
                            style={styles.imgCancel}
                        />
                    </View>
                </View>
                <FlatList
                    data={item.itemsProduct}
                    renderItem={this.renderItemProduct.bind(this)}
                    keyExtractor={(key) => key.product.productId.toString()}
                />
            </View>
        );
    }
    render() {
        //Total money product
        let total = 0;
        if (this.props.cart.length) {
            const arrayStoreMarked = this.props.cart.filter((item) => item.itemsStore.marked === true);
            if (arrayStoreMarked.length) {
                for (let i = 0; i < arrayStoreMarked.length; i++) {
                    const arrayProductMarked = arrayStoreMarked[i].itemsProduct.filter((a) => a.marked === true);
                    if (arrayProductMarked.length) {
                        for (let j = 0; j < arrayProductMarked.length; j++) {
                            total += parseInt(arrayProductMarked[j].product.unitPrice);
                        }
                    }
                }
            }
        }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {this.props.isLoading ? <ActivityIndicator size='large' animating /> : (
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={this.props.cart}
                            renderItem={this.renderItems.bind(this)}
                            keyExtractor={(item) => item.itemsStore.store.storeId.toString()}
                        />
                        <View style={styles.bottom}>
                            <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'center', alignContent: 'center' }}>
                                <Image
                                    source={check}
                                    style={styles.imgCheck}
                                />
                                <Text style={{ color: '#111', fontSize: 15, marginLeft: 5 }}>All</Text>
                            </View>
                            <View style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#111', fontSize: 15 }}>Tổng tiền</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'orange', fontSize: 17, fontFamily: 'Neon' }}>{`${total}.000`}</Text>
                                    <Text style={{ color: 'orange', fontSize: 17, fontFamily: 'Neon', textDecorationLine: 'underline', marginLeft: 2 }}>đ</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.buy}>Mua hàng</Text>
                            </View>
                        </View>
                    </View>
                )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapItemStore: {
        height: screenHeight * 0.06,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    imgCheck: {
        width: 18,
        height: 18,
        resizeMode: 'stretch',
        marginLeft: 5
    },
    imgCancel: {
        width: 18,
        height: 18,
        resizeMode: 'stretch',
        marginRight: 10
    },
    nameStore: {
        fontSize: 16,
        color: '#111',
        marginLeft: 10
    },
    bottom: {
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        elevation: 0.5,
        flexDirection: 'row',
        height: 0.09 * screenHeight,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    buy: {
        marginLeft: '10%',
        fontSize: 16,
        color: '#ffffff',
        backgroundColor: primaryColor,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 0.5,
        borderRadius: 5
    }
});

const mapStateToProps = (state) => ({
    cart: state.cartReducer.cart,
    error: state.cartReducer.error,
    isLoading: state.cartReducer.isLoading
});

const mapDispatchToProps = (dispath) => ({
    getCart: () => {
        dispath(getCart());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
