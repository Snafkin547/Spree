import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyAccountPage.css';

class MyAccountPage extends Component {
  render() {
    return (
      <ul className="account-page">
        <Link to='/MyAccountPage'>My Account (after login)</Link>
      </ul>
    );
  }
}

export default MyAccountPage;