import React, { useState, useEffect, Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';

function App() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact>
              <MainPage />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  
}

export default App;
