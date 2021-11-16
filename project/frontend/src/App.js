import React, { useState, useEffect, Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import Header from './components/Header';
import Search from './pages/Search';

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
          </Switch>
        </BrowserRouter>
      </div>
    );
  
}

export default App;
