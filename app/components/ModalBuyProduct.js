import React, { PureComponent } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,
    Image,
    TextInput,
    alert,
    KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { screenHeight, screenWidth } from '../styles/variables';

const iconPlus = require('../images/icons/plus.png');
const iconMinus = require('../images/icons/minus.png');
const iconCancel = require('../images/icons/cancel.png');

export default class ModalBuyProduct extends PureComponent {
    render() {
        const { container, wrap, wraphead, wrapImg, img, wrapPrice,
            price, unit, total, wraptext, wrapOrder, text1, icon, textInput,
            wrapTextInput, wrapTotal, text2, totalPrice, iconX, wrapBuyNow, text3 } = styles;
        return (
            <Modal
                animationType="slide"
                transparent
                visible={this.props.modalVisible}
                onRequestClose={() => { alert('Modal has been closed.'); }}
            >
                <KeyboardAvoidingView behavior="position" enabled style={container}>
                    <View style={wrap}>
                        <View style={{ width: 0.78 * screenWidth }}>
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
                                <TouchableOpacity onPress={this.props.decreQuantity}>
                                    <Image source={iconMinus} style={icon} />
                                </TouchableOpacity>
                                <View style={wrapTextInput}>
                                    <TextInput
                                        placeholderTextColor='#111'
                                        underlineColorAndroid='transparent'
                                        style={textInput}
                                        onChangeText={this.props.onChangeText}
                                        defaultValue={`${this.props.defaultValue}`}
                                        keyboardType='numeric'
                                        onSubmitEditing={this.props.onSubmitEditing}
                                        maxLength={3}
                                        value={this.props.value}
                                    />
                                </View>
                                <TouchableOpacity onPress={this.props.increQuantity}>
                                    <Image source={iconPlus} style={icon} />
                                </TouchableOpacity>
                            </View>
                            <View style={wrapTotal}>
                                <Text style={text2}>Tổng số tiền: </Text>
                                <Text style={totalPrice}>{this.props.totalPrice}.000đ</Text>
                            </View>
                        </View>
                        <View style={{ width: 0.22 * screenWidth, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={this.props.hideModal}>
                                <Image source={iconCancel} style={iconX} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.props.onPress}>
                                <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={wrapBuyNow} >
                                    <Text style={text3}>Mua</Text>
                                    <Text style={text3}>ngay</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
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
        width: 0.28 * screenWidth,
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
        marginHorizontal: 15,
        marginTop: 17,
    },
    wrapTotal: {
        flexDirection: 'row',
        marginTop: 30,
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
        // marginLeft: 55,
        marginTop: 5,
        marginRight: 5,
    },
    wrapBuyNow: {
        marginTop: 20,
        height: 0.3 * screenHeight,
        width: 0.1 * screenHeight,
        borderRadius: 5,
        elevation: 1,
        borderWidth: 0.5,
        borderColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    text3: {
        fontSize: 19,
        color: '#111',
        marginVertical: 10
    },
    textInput: {
        padding: 0,
        marginTop: 8,
        textAlign: 'center',
        fontSize: 30,
        width: 50
    },
    wrapTextInput: {
    }
});
