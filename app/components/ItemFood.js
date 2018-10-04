import React, { PureComponent } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class ItemFood extends PureComponent {
    render() {
        const { wrapTextEating, headLine, nameEating, moreEating } = styles;
        return (
            <View style={wrapTextEating}>
                <View style={headLine} />
                <Text style={nameEating}>{this.props.nameEating}</Text>
                <TouchableOpacity onPress={this.props.clickView}>
                    <Text style={moreEating}>Xem tại đây</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapTextEating: {
        flexDirection: 'row',
        marginTop: 7,
        backgroundColor: '#ffffff'
    },
    headLine: {
        backgroundColor: 'gray',
        borderRadius: 2,
        width: 4,
        height: 4,
        marginHorizontal: 5,
        marginTop: 10
    },
    nameEating: {
        fontSize: 18,
        color: '#111',
        fontFamily: 'Roboto-Thin',
    },
    moreEating: {
        fontSize: 12,
        textDecorationLine: 'underline',
        color: '#1a75ff',
        marginHorizontal: 3,
        marginTop: 4
    },
});

export default ItemFood;
