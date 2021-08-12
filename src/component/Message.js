import React, { Component } from 'react';
import { connect } from 'react-redux';
class Message extends Component {
    showTotalAmount = (cart) => {
        
        var quantity = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                quantity += cart[i].quantity;
            }
        }
        return quantity;
    }
    render() {
        var { message } = this.props;
        var cart = this.props.cart;
        

        return (
            <h3>
                <span className="badge amber darken-2">
                    {message}
                   
                </span>
                <br />
                <span className="badge amber darken-2">
                    Số lượng sản phẩm đã mua : {this.showTotalAmount(cart)}
                   
                </span>
            </h3>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, null)(Message);
