import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

const MenuLink = ({
    label, // nội dung trong thẻ
    to, // giống như href trong thẻ a
    activeOnlyWhenExact
}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({ match }) => { //match la doi tuong xac dinh su trung khop cua URL
                var active = match ? 'active' : '';

                return (
                   
                    <Link  to={to} className={`my-link ${active}`}>{label}</Link>
                
                );
            }}
        />
    );
}
class Header extends Component {
    
    render() {
        var { cart } = this.props;
        return (
            <div id="navbar">
                <a href="#default" id="logo">CompanyLogo</a>
                <div id="navbar-right">
                    <MenuLink label="Home" to ="/" activeOnlyWhenExact={true} />
                    <MenuLink label="My cart" to ="/mycart" activeOnlyWhenExact={false} />
                    {/* <Link className="active" to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/cart">Cart</Link> */}
                    {/* <Link to={{
                    pathname: '/mycart',
                    state: [{id: 1, name: 'Ford', color: 'red'}]
                    }}> My cart</Link> */}
                </div>
            
            </div>
        );
    }
}

export default Header;
