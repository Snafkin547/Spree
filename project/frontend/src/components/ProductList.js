import React, { Component } from 'react';
import Products from './Products';

class ProductList extends Component {
  render() {
    return (
      <div className="container main-content">
        <Products/>
      </div>
    );
  }
}

export default ProductList;