import React, { Component } from 'react';
import Products from './Products';
import './Products.css'; 

class ProductList extends Component {
  render() {
    return (
      <div className="carousel__view">
          <Products/>        
      </div>
    );
  }
}

export default ProductList;