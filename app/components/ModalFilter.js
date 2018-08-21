import React, { Component } from 'react';
import { Text, View, Modal, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { screenHeight, screenWidth } from '../styles/variables';

export default class ModalFilter extends Component {

    render() {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={this.props.modalVisible}
                onRequestClose={() => {
                }}
            >
                <TouchableWithoutFeedback onPress={this.props.hideModal}>
                    <View style={styles.container}>
                        <View style={styles.wrap}>
                            <LinearGradient style={styles.wrapHeader} colors={['#f7dd9f', '#f0c14d']}>
                                <Text style={{ color: '#111' }}>Danh mục thể loại</Text>
                            </LinearGradient>
                            {this.props.children}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        height: 0.5 * screenHeight,
        width: 0.5 * screenWidth,
        backgroundColor: '#fff',
        borderColor: '#111',
        borderWidth: 1
    },
    wrapHeader: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#111',
        borderBottomWidth: 1
    },
};

