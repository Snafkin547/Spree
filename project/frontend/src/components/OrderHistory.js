import { Component, React, useEffect, useState } from 'react';
import ApiUtil from '../Utils/ApiUtil';
import HttpUtil from '../Utils/HttpUtil';
import styles from '../components/Layout.module.css'

class OrderInformation extends Component {    
    render() {
        return (
            <tr>
                <td> { this.props.name } </td>  
                <td> ${ this.props.price } </td>
            </tr>
        )
    }
}


class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }
    componentDidMount () {
        const userId = window.localStorage.getItem("userId");
        fetch(ApiUtil.API_GETORDEREDPRODUCTS+'?'+ new URLSearchParams({
            user_id: userId
        }).toString())
           
        
        .then(response => response.json())
        .then(result => {
            console.log(result);
            this.setState({orders: result});
        })};

    // render() ask components to describe what they want their section of the UI to look like based on the current combination of props and state
    render() {
        // product proprierties 
        const orders = {
            "orderInformation": this.state.orders
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
          <table className={styles.orderHistory}>
              <tr>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
              {orderInformationComponent}
          </table>
      ); 
  }
}
  
  export default OrderHistory;
  