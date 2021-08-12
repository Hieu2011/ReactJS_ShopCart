import React, { Component } from 'react';
import Cart from './Cart';
import CartItem from './CartItem';
import CartResult from './CartResult';
import * as Message from '../constants/Message';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions/index';
import CartContainer from '../containers/CartContainer';
class MyCart extends Component {
   
    render() {
        console.log(this.props.location.state);
        var cart = this.props.location.state;
        return (
            <CartContainer cart={cart}/>
        );
    }
}

export default MyCart;
