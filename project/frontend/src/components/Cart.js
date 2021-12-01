import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <ul className="cart-items">
        <Link to='/Cart'>My Cart</Link>
      </ul>
    );
  }
}

export default Cart;