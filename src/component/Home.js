import React, { Component } from 'react';
import Products from './Products';
import ProductsContainer from '../containers/ProductsContainer';
import MessageContainer from '../containers/MessageContainer';
import CartContainer from '../containers/CartContainer';

class Home extends Component {
    render() {
        return (
            <div>
                <ProductsContainer />
                <MessageContainer/>
                <CartContainer/>
            </div>
            
        );
    }
}

export default Home;