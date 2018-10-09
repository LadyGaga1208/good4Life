import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import { screenHeight, primaryColor, screenWidth } from '../../styles/variables';
import { getCart, changeMarkedStore, changeMarkedProduct, removeProduct, removeStore, increQuantity, decreQuantity, inputQuantity } from '../../redux/action/cart';
import ItemCart from '../../components/ItemCart';
import { url } from '../../api/ApiService';

const check = require('../../images/icons/circle.png');
const checked = require('../../images/icons/checked.png');
const cancel = require('../../images/icons/cancel.png');

class StackCart extends Component {

    static navigationOptions = {
        title: 'Giỏ hàng của bạn',
        headerStyle: {
            backgroundColor: primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            number: null,
        };
    }

    componentDidMount() {
        this.props.getCart();
    }

    onSubmitEditing(item) {
        this.props.inputQuantity(item.product.storeId, item.product.productId, parseInt(this.state.number));
    }

    changeMarkedProduct = (item) => {
        this.props.changeMarkedProduct(item.product.storeId, item.product.productId);
    }

    removeProduct(item) {
        this.props.removeProduct(item.product.storeId, item.product.productId);
    }

    removeStore(item) {
        this.props.removeStore(item.itemsStore.store.storeId);
    }

    increQuantity(item) {
        this.props.increQuantity(item.product.storeId, item.product.productId);
    }

    decreQuantity(item) {
        this.props.decreQuantity(item.product.storeId, item.product.productId);
    }

    goToStore(item) {
        const navigateStoreDetail = NavigationActions.navigate({
            routeName: 'TabStoreDetail',
            params: { data: item.itemsStore.store }
        });
        this.props.navigation.dispatch(navigateStoreDetail);
    }

    goToHome() {
        this.props.navigation.popToTop();
    }

    goToProductDetail(item) {
        const navigateProductDetail = NavigationActions.navigate({
            routeName: 'ProductDetail',
            params: { data: item.product }
        });
        this.props.navigation.dispatch(navigateProductDetail);
    }

    renderItemProduct({ item }) {
        return (
            <ItemCart
                changeMarkedProduct={this.changeMarkedProduct.bind(this, item)}
                checked={item.marked}
                imgProduct={`${url}/product/${item.product.productId}/${item.product.imagePath}.png`}
                nameProduct={item.product.productName}
                price={item.product.unitPrice}
                onChangeText={(text) => {
                    if (parseInt(text) <= item.product.total) {
                        return this.setState({
                            number: text
                        });
                    }
                    return item.quantity;
                }
                }
                defaultValue={item.quantity}
                removeProduct={this.removeProduct.bind(this, item)}
                increQuantity={this.increQuantity.bind(this, item)}
                decreQuantity={this.decreQuantity.bind(this, item)}
                onSubmitEditing={this.onSubmitEditing.bind(this, item)}
                onPress={this.goToProductDetail.bind(this, item)}
            />
        );
    }

    renderItems({ item }) {
        return (
            <View>
                <View style={styles.wrapItemStore} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <TouchableOpacity onPress={() => this.props.changeMarkedStore(item.itemsStore.store.storeId)}>
                            <Image
                                source={item.itemsStore.marked ? checked : check}
                                tintColor={item.itemsStore.marked ? primaryColor : '#111'}
                                style={styles.imgCheck}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 0.7 * screenWidth }} onPress={this.goToStore.bind(this, item)}>
                            <Text style={styles.nameStore}>{item.itemsStore.store.storeName}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.removeStore.bind(this, item)}>
                        <Image
                            source={cancel}
                            style={styles.imgCancel}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 1, backgroundColor: '#ddd' }} />
                <FlatList
                    data={item.itemsProduct}
                    renderItem={this.renderItemProduct.bind(this)}
                    keyExtractor={(key) => key.product.productId.toString()}
                />
            </View >
        );
    }
    render() {
        const { cart } = this.props;
        if (cart.length > 0) {
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                const arrayProductMarked = cart[i].itemsProduct.filter((a) => a.marked === true);
                if (arrayProductMarked.length > 0) {
                    for (let j = 0; j < arrayProductMarked.length; j++) {
                        total += parseInt(arrayProductMarked[j].product.unitPrice) * arrayProductMarked[j].quantity;
                    }
                }
            }
            return (
                <View style={styles.container}>
                    <View style={styles.content}>
                        {this.props.isLoading ? <ActivityIndicator size='large' animating /> : (
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={this.props.cart}
                                    renderItem={this.renderItems.bind(this)}
                                    keyExtractor={(item) => item.itemsStore.store.storeId.toString()}
                                />
                                <View style={styles.blank} />
                                <View style={styles.bottom}>
                                    <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#111', fontSize: 15 }}>Tổng tiền</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: '#111', fontSize: 17, fontFamily: 'Neon' }}>{`${total}.000`}</Text>
                                            <Text style={{ color: '#111', fontSize: 17, fontFamily: 'Neon', textDecorationLine: 'underline', marginLeft: 2 }}>đ</Text>
                                        </View>
                                    </View>
                                    <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={styles.wrapBuy}>
                                        <Text style={styles.buy}>Mua hàng</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        )
                        }
                    </View>
                </View>
            );
        }
        return (
            <View style={styles.container} >
                <View style={styles.content}>
                    {this.props.isLoading ? <ActivityIndicator size='large' animating /> : (
                        <View style={styles.content}>
                            <Text style={{ fontSize: 18, color: '#111' }}>Giỏ hàng trống</Text>
                            <Text style={styles.text}>Mời bạn quay trở lại tiếp tục mua hàng !!!</Text>
                            <TouchableOpacity onPress={this.goToHome.bind(this)}>
                                <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={styles.countinue}>
                                    <Text style={styles.textCountinue}>Tiếp Tục</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        color: '#111',
        fontSize: 15,
        fontFamily: 'Roboto-Thin'
    },
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
        alignItems: 'center'
    },
    blank: {
        height: 0.09 * screenHeight,
        backgroundColor: '#fff'
    },
    wrapBuy: {
        width: '30%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#111',
        borderWidth: 1,
        borderRadius: 3
    },
    buy: {
        fontSize: 16,
        color: '#111',
    },
    countinue: {
        height: 40,
        width: 0.3 * screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#111',
        borderWidth: 1,
        borderRadius: 2,
        marginTop: 15
    },
    textCountinue: {
        color: '#111',
        fontSize: 14,
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
    },
    changeMarkedStore: (storeId) => {
        dispath(changeMarkedStore(storeId));
    },
    changeMarkedProduct: (storeId, productId) => {
        dispath(changeMarkedProduct(storeId, productId));
    },
    removeProduct: (storeId, productId) => {
        dispath(removeProduct(storeId, productId));
    },
    removeStore: (storeId) => {
        dispath(removeStore(storeId));
    },
    increQuantity: (storeId, productId) => {
        dispath(increQuantity(storeId, productId));
    },
    decreQuantity: (storeId, productId) => {
        dispath(decreQuantity(storeId, productId));
    },
    inputQuantity: (storeId, productId, number) => {
        dispath(inputQuantity(storeId, productId, number));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(StackCart);

