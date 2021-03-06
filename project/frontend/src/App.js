import React, { useState, useEffect, Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import Header from './components/Header';
import Search from './pages/Search';
import CheckoutForm from './pages/Checkout';
import MyAccountPage from './pages/MyAccountPage';
import Confirmation from './pages/Confirmation';


function App() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact>
              <MainPage />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/Search'>
              <Search />
            </Route>
            <Route path="/checkout">
              <CheckoutForm />
            </Route>
            <Route path="/MyAccountPage">
              <MyAccountPage/>
            </Route>
            <Route path="/confirmation">
              <Confirmation />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  
}

export default App;
