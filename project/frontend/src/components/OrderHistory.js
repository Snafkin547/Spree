import { Component, React, useEffect, useState } from 'react';
import ApiUtil from '../Utils/ApiUtil';
import HttpUtil from '../Utils/HttpUtil';

class OrderInformation extends Component {    
    render() {
        return (
            <li className='order_card'>
                <div>
                    <span className="order_name"> { this.props.name } </span>
                </div>        
                <div>
                    <span className="order__price"> { this.props.price } </span>
                </div> 
            </li>
        )
    }
}


class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {orderA: {}, orderB: {}};
    }
    componentDidMount () {
        fetch(ApiUtil.API_GETORDEREDPRODUCTS+'?'+ new URLSearchParams({
            user_id: 405
        }).toString())
           
        
        .then(response => response.json())
        .then(result => {
            console.log(result);
            this.setState({orderA: result[0], orderB: result[1]});
        })};

    // render() ask components to describe what they want their section of the UI to look like based on the current combination of props and state
    render() {
        // product proprierties 
        const orders = {
            "orderInformation": [this.state.orderA, 
                                    this.state.orderB] 
        }
        // API path
        const orderInformationComponent = orders.orderInformation.map(orderInformationObject => {
            return (
                // ... = spread operator, it deconstructs the object in this case product information object, split up the each of the fields and pass them as a props in the product information
                <OrderInformation {...orderInformationObject} />
            )
        })
    
      // how it will show in the DOM
      return (  
        <ul className="carousel__list">{orderInformationComponent}</ul>
      ); 
  }
}
  
  export default OrderHistory;
  