import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getCart } from '../../redux/action/cart';

class IconCart extends React.Component {
    componentDidMount() {
        this.props.getCart();
    }
    render() {
        const { cart } = this.props;
        let total = 0;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].itemsProduct.length > 0) {
                    for (let j = 0; j < cart[i].itemsProduct.length; j++) {
                        total += cart[i].itemsProduct[j].quantity;
                    }
                }
            }
        }
        return (
            <TouchableOpacity
                style={{
                    zIndex: 0,
                    flex: 1,
                    alignSelf: 'stretch',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginRight: 10,
                    width: 50
                }}
                onPress={this.props.onPress}
            >
                <Image source={this.props.source} tintColor={this.props.tintColor} />
                {cart.length > 0 ?
                    <View
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 10,
                            backgroundColor: '#ff4000',
                            borderRadius: 9,
                            width: 18,
                            height: 18,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{ fontSize: 10, color: '#fff' }}>{total}</Text>
                    </View>
                    : null}
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cartReducer.cart,
});

const mapDispatchToProps = (dispath) => ({
    getCart: () => {
        dispath(getCart());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(IconCart);
