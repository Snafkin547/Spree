import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <ul className="cart-items">
        <a href="#/cart">My Cart</a>
      </ul>
    );
  }
}

export default Cart;