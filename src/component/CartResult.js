import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

class CartResult extends Component {
    gotoCart(cart){

    }
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light" onClick={() => this.gotoCart(cart)}>
                        Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                   
                </td>
            </tr>
        );
    }

    showTotalAmount = (cart) => {
        console.log(cart);
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }

}

export default CartResult;
