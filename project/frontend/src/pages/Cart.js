import { Component } from "react";
import "./Cart.css";
import ApiUtil from "../Utils/ApiUtil";
import HttpUtil from '../Utils/HttpUtil';
import { Link } from "react-router-dom";

// The single poduct row
function ShopRow(props) {
  return (
    <tr className="listItem">
      <td>
        <span className="listItem-name">{props.name}</span>
      </td>
      <td>
        <input
          className="listItem-count"
          type="number"
          value={props.count}
          onChange={props.handleCountChange}
        />
      </td>
      <td className="listItem-price">
        {props.price}
      </td>
      <td className="listItem-totalPrice">
        {props.totalPrice}
      </td>
      <td>
        <input
          className="checkBox"
          type="checkbox"
          checked={props.isChecked}
          onChange={props.handleCheck}
        />
      </td>
    </tr>
  );
}


// Show the total price.
function TotalBlock(props) {
  return (
    <div className="totalBlock">
      <span>Total: </span>
      <span>{props.totalPrice}</span>
    </div>
  );
}


// Main class
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      isCheckedAll: false,
      totalPrice: 0
    };
  }

  componentDidMount () {
    fetch(ApiUtil.API_GETCART,
      {method: "GET"})
      .then(response => response.json())
      .then(result => {
        for (let key in result) {
          this.state.cartList.push(
            {
              name: result[key]["name"],
              price: result[key]["price"],
              count: 1,
              totalPrice: result[key]["price"],
              isChecked: false
            });
        }
      })
  };

  // Calculate the total price
  handleTotalPrice = () => {
    let totalPrice = 0;
    this.state.cartList.forEach((item) => {
      if (item.isChecked) {
        totalPrice += item.count * item.price;
      }
    });
    console.log('totalPrice', this);
    return totalPrice;
  }

  // Select all
  handleCheckAll = () => {
    this.setState({
      isCheckedAll: !this.state.isCheckedAll
    });
    this.state.cartList.map((item) => {
      item.isChecked = !this.state.isCheckedAll
    });
    this.setState({
      totalPrice: this.handleTotalPrice()
    });
    console.log('cartList: ', this.state.cartList);
  }

  // Select a single product
  handleCheck = (event, index) => {
    this.state.cartList[index].isChecked = event.target.checked;
    this.setState({
      cartList: this.state.cartList
    });
    let checkedCache = new Array(0);
    this.state.cartList.forEach((item) => {
      checkedCache.push(item.isChecked);
    });
    console.log('checkedCache: ', checkedCache);
    this.setState({
      isCheckedAll: checkedCache.every(isChecked => isChecked)
    },
    () => {
      console.log("isCheckAll: ", this.state.isCheckedAll);
    });
    this.setState({
      totalPrice: this.handleTotalPrice()
    });
  }

  // Quantity
  handleCountChange = (event, index) => {
    this.state.cartList[index].count = event.target.value;
    this.state.cartList[index].totalPrice = event.target.value * this.state.cartList[index].price;
    this.setState({
      cartList: this.state.cartList
    });
    this.state.totalPrice = this.handleTotalPrice();
    this.setState({
      totalPrice: this.state.totalPrice
    });
  }

  // Whether selected. If not, cannot buy or remove
  handleHaveCheck = () => {
    let haveChecked = new Array(0);
    this.state.cartList.forEach((item) => {
      haveChecked.push(item.isChecked);
    });
    return haveChecked.some(item => item === true);
  }

  // Remove
  handleRemove = () => {
    if (this.handleHaveCheck()) {
      let removeList = [];
      this.state.cartList.forEach((item) => {
        if (item.isChecked) {
          removeList.push(item.name);
          this.state.cartList = this.state.cartList.filter((ele) => ele !== item);
        }
      });
      HttpUtil.post(ApiUtil.API_REMOVEFROMCART, removeList);
      this.setState({
        cartList: this.state.cartList,
        totalPrice: this.handleTotalPrice()
      });
    } else {
      alert('No seleted!');
    }
  }

  //Checkout
  handleBuy = () => {
    HttpUtil.post(ApiUtil.API_TOTALPRICE, this.state.totalPrice);
    if (!this.handleHaveCheck()) {
      alert('No seleted!');
    }
    this.handleRemove();
  }

  render() {
    return (
      <div id="cart-container" className="container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>
                Select all
                <input
                  className="selectAll"
                  type="checkbox"
                  checked={this.state.isCheckedAll}
                  onChange={this.handleCheckAll}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.cartList.map((item, index) => {
                return (
                  <ShopRow
                    key={index}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                    totalPrice={item.totalPrice}
                    isChecked={item.isChecked}
                    handleCheck={(e) => {this.handleCheck(e, index);}}
                    handleCountChange={(e) => {this.handleCountChange(e, index)}}
                  />
                )
              })
            }
          </tbody>
        </table>
        <TotalBlock totalPrice={this.state.totalPrice} />
       
        <Link to="/checkout">
          <button
            id="shopCar-buyBtn"
            className="primary-btn"
           >Checkout</button>
        </Link>
    

        <button
          id="shopCar-removeBtn"
          className="remove-btn"
          onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

export default Cart;