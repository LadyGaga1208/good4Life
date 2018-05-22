import React, { PureComponent } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class ItemFood extends PureComponent {
    render() {
        const { wrapTextEating, headLine, nameEating, moreEating } = styles;
        return (
            <View style={wrapTextEating}>
                <View style={headLine} />
                <Text style={nameEating}>{this.props.nameEating}</Text>
                <Text style={moreEating}>Xem tại đây</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapTextEating: {
        flexDirection: 'row',
        marginTop: 7
    },
    headLine: {
        backgroundColor: '#111',
        borderRadius: 3,
        width: 6,
        height: 6,
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
