import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import About from './component/About';
import Cart from './component/Cart';
import Header from './component/Header';
import Home from './component/Home';
import Message from './component/Message';
import Products from './component/Products';
import MyCart from './component/MyCart';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        
        <div style={{'marginTop' :'210px','padding':'15px 15px 2500px','fontSize':'30px'}}>
          <Route path="/"  exact component = {Home}/>
          <Route path="/about" component = {About}/>
          <Route path="/cart" component = {Cart}/>
          <Route path="/mycart" component = {MyCart}/>
        </div>
        
      </Router>
      
    );
  }
}
export default App;