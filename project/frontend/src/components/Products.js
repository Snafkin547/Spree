import { Component, React, useEffect, useState } from 'react';
import './Products.css';  // style sheet for this part of the UI
import ApiUtil from '../Utils/ApiUtil';

// this class describes how we render the product information cards
// prop the data you pass to your react component so it knows what values to put in certain fields, instead of hard coding it will be dynamic
class ProductInformation extends Component {    
    render() {
        return (
            <li className='product_card'>
                <div>
                <img class="item__image" src={ this.props.image } alt="Image" />
                </div>
                <div>
                    <span className="item__name"> { this.props.name } </span>
                </div>        
                <div>
                    <span className="item__price"> { this.props.price } </span>
                </div> 
                <div>
                <span className="add_to_cart"> <a href="#/cart">Add to Cart</a> </span>
                </div>
            </li>
        )
    }
}


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {productA: {}, productB: {}};
    }
    componentDidMount () {
        fetch(ApiUtil.API_GETPRODUCT,
            {method: "GET"})
        .then(response => response.json())
        .then(result => {
            console.log(result);
            this.setState({productA: result[0], productB: result[1]});
        })};

    // render() ask components to describe what they want their section of the UI to look like based on the current combination of props and state
    render() {
        // product proprierties 
        const products = {
            "productInformation": [this.state.productA, 
                                    this.state.productB] 
        }
        // API path
        const productInformationComponent = products.productInformation.map(productInformationObject => {
            return (
                // ... = spread operator, it deconstructs the object in this case product information object, split up the each of the fields and pass them as a props in the product information
                <ProductInformation {...productInformationObject} />
            )
        })
    
      // how it will show in the DOM
      return (  
        <ul className="carousel__list">{productInformationComponent}</ul>
      ); 
  }
}
  
  export default Products;
  