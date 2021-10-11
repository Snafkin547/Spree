import { Component, React, useEffect, useState } from 'react';
import './Products.css';  // style sheet for this part of the UI


// this class describes how we render the product information cards
// prop the data you pass to your react component so it knows what values to put in certain fields, instead of hard coding it will be dynamic
class ProductInformation extends Component {    
    render() {
        return (
            <li className='product_card'>
                <div className= "item__image">
                    <img src={ this.props.image }></img>
                </div>
                <div>
                    <span className="item__name"> { this.props.name } </span>
                </div>        
                <div>
                    <span className="item__price"> { this.props.price } </span>
                </div> 
            </li>
        )
    }

}


class Products extends Component {
    // render() ask components to describe what they want their section of the UI to look like based on the current combination of props and state
    render() {

        // product proprierties 
        const products = {
            "productInformation": [
                {
                    "image": "img/iphone13-blue.jpg",
                    "name": "iPhone 13 Pro",
                    "price": 1200,
                },
                {
                    "image": "img/CGG_Samsun_galaxys21_phantom",
                    "name": "Samsung Galaxy S21",
                    "price": 900,
                }
            ]

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
  