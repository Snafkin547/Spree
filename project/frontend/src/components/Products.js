import { Component, React, useEffect, useState } from 'react';
import './Products.css';  // style sheet for this part of the UI


// this class describes how we render the product information cards
// prop the data you pass to your react component so it knows what values to put in certain fields, instead of hard coding it will be dynamic
class ProductInformation extends Component {    
    render() {
        return (
            <div>
                <h1>{ this.props.image }</h1>
                <h2>{ this.props.name }</h2>
                <h2>{ this.props.price }</h2>            
            </div>
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
                    "image": "Image",
                    "name": "iPhone 13",
                    "price": 1200,
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
        <div className='product_card'>
            <div className="product_info">
                <body> {productInformationComponent} </body>
                </div> 
        </div>          
      ); 
  }
}
  
  export default Products;
  