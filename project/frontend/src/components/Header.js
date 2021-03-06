import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import './Header.css';
import SearchBar from './Search';
import TheAccount from './TheAccount.js';



class Header extends Component {
  render() {
    return (
      <header id="header" role="banner">
          <table className="header-tbl" role="presentation">
              <tbody> 
                  <tr>
                  <td>
                  <h1>
                    <Link to='/'>
                      <img class="logo__image" src={"img/chip-spree-logo.JPG"} alt="Image" />
                    </Link>
                  </h1>      
                  </td>
                  <td class="search__bar"><SearchBar/></td>
                  <td class="cart"><Cart /></td>
                  <td class="account"><TheAccount /></td>
                  </tr>
                </tbody>
            </table>             
      </header>
    );
  }
}

export default Header;