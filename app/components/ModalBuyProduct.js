import React, { PureComponent } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,
    Image,
    TextInput,
    alert
} from 'react-native';

import { screenHeight, screenWidth } from '../styles/variables';

const iconPlus = require('../images/icons/plus.png');
const iconMinus = require('../images/icons/minus.png');
const iconCancel = require('../images/icons/cancel.png');

export default class ModalBuyProduct extends PureComponent {
    render() {
        const { container, wrap, wraphead, wrapImg, img, wrapPrice,
            price, unit, total, wraptext, wrapOrder, text1, icon,
            wrapTextInput, wrapTotal, text2, totalPrice, iconX, wrapBuyNow, text3 } = styles;
        return (
            <Modal
                animationType="slide"
                transparent
                visible={this.props.modalVisible}
                onRequestClose={() => { alert('Modal has been closed.'); }}
            >
                <View style={container}>
                    <View style={wrap}>
                        <View>
                            <View style={wraphead}>
                                <View style={wrapImg}>
                                    <Image style={img} source={{ uri: `${this.props.img}` }} />
                                    <View style={wraptext}>
                                        <View style={wrapPrice}>
                                            <Text style={price}>{this.props.price}đ</Text>
                                            <Text style={unit}>/{this.props.unit}</Text>
                                        </View>
                                        <Text style={total}>Số lượng: {this.props.total} {this.props.unit}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={wrapOrder}>
                                <Text style={text1}>Số lượng</Text>
                                <TouchableOpacity>
                                    <Image source={iconMinus} style={icon} />
                                </TouchableOpacity>
                                <View style={wrapTextInput}>
                                    <TextInput
                                        placeholder='1'
                                        placeholderTextColor='#111'
                                        underlineColorAndroid='transparent'
                                        style={{ fontSize: 33 }}
                                    />
                                </View>
                                <TouchableOpacity>
                                    <Image source={iconPlus} style={icon} />
                                </TouchableOpacity>
                            </View>
                            <View style={wrapTotal}>
                                <Text style={text2}>Tổng số tiền: </Text>
                                <Text style={totalPrice}>50.000 đ</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.props.hideModal}>
                                <Image source={iconCancel} style={iconX} />
                            </TouchableOpacity>
                            <TouchableOpacity style={wrapBuyNow}>
                                <Text style={text3}>Mua</Text>
                                <Text style={text3}>ngay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.43)',
        flex: 1
    },
    wrap: {
        backgroundColor: '#ffffff',
        marginTop: 0.5 * screenHeight,
        height: 0.5 * screenHeight,
        flexDirection: 'row'
    },
    wraphead: {
        height: 0.21 * screenHeight,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginTop: 5
    },
    wrapImg: {
        flexDirection: 'row',

    },
    img: {
        backgroundColor: 'yellow',
        width: 0.33 * screenWidth,
        height: 0.2 * screenHeight,
        resizeMode: 'stretch',
        marginLeft: 10
    },
    wrapPrice: {
        flexDirection: 'row'
    },
    price: {
        fontFamily: 'Neon',
        color: '#e60000',
        fontSize: 18
    },
    wraptext: {
        marginLeft: 5,
        marginTop: 25
    },
    total: {
        fontSize: 16,
        color: '#111'
    },
    unit: {
        color: '#111',
        fontSize: 14
    },
    wrapOrder: {
        flexDirection: 'row',
    },
    text1: {
        fontSize: 22,
        color: '#111',
        marginLeft: 10,
        marginTop: 17
    },
    icon: {
        width: 27,
        height: 27,
        resizeMode: 'stretch',
        marginHorizontal: 25,
        marginTop: 17
    },
    wrapTotal: {
        flexDirection: 'row',
        marginTop: 10
    },
    text2: {
        fontSize: 22,
        color: '#111',
        marginLeft: 10,
    },
    totalPrice: {
        fontSize: 22,
        color: '#e60000'
    },
    iconX: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        marginLeft: 55,
        marginTop: 5
    },
    wrapBuyNow: {
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: '#008296',
        height: 0.3 * screenHeight,
        width: 0.1 * screenHeight,
        borderRadius: 10,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text3: {
        fontSize: 22,
        color: '#fff',
        marginVertical: 10
    }
});
