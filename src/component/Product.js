import React, { Component } from 'react';
import * as Message from '../constants/Message';


class Product extends Component {
    onAddToCart = (product) => {
        console.log(product);
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }

    showRatings(rating){
        var result = [];
        for(var i = 1;i <= rating;i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for(var j = 1; j <= ( 5-rating);j++){
            result.push(<i key={i + j} className="fa fa-star-o"></i>);
        }
        return result;
    }
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="product">
                    <img data-src="#" src={ this.props.product.image } alt="{ this.props.product.name }"></img>
                    <div className="caption">
                        <h3>{ this.props.product.name }</h3>

                        <p>
                            { this.props.product.price } VNĐ
                        </p>
                        <p>
                            <a className="btn btn-primary"  onClick={ () => this.onAddToCart(this.props.product) }>Mua Hàng</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
