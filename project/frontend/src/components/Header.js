import React, { Component } from 'react';
import './Products.css';
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
                    <img class="logo__image" src={"img/chip-spree-logo.JPG"} alt="Image" />
                  </h1>      
                  </td>
                  <td class="search__bar"><SearchBar/></td>
                  <td class="account"><TheAccount /></td>
                  </tr>
                </tbody>
            </table>
          <div></div>                
      </header>
    );
  }
}

export default Header;