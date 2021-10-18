import React, { Component } from 'react';
import './Products.css';

class Header extends Component {
  render() {
    return (
      <header id="header" role="banner">
          <table className="header-tbl" role="presentation">
              <tbody> 
                  <tr>
                  <td>
                  <h1>
                    <img src={"img/chip-spree-logo.JPG"}></img>
                  </h1>      
                  </td>
                   </tr>
                </tbody>
            </table>
          <div></div>                
      </header>
    );
  }
}

export default Header;