import React, { Component } from 'react';
import Message from './Message';
import Product from './Product';

class Products extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        console.log(this.props.children);

        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{'display': 'flex'}}>
                        { this.props.children }
                    </div>
                </div>
                <Message></Message>

            </section>
        );
    }
}

export default Products;
