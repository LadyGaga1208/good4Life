import React, { PureComponent } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

class Loading extends PureComponent {
    render() {
        console.log('render Loading');
        return (
            <View style={[styles.container, this.props.style]}>
                <ActivityIndicator size='large' color='#008296' animating />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Loading;
