import React, { useState, useEffect, Component} from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import TheAccount from './components/TheAccount.js'
function App() {
    // const [initialData, setInitialData] = this.useState([{}]);

    // useEffect(()=> {
    //     fetch("/").then(response => response.json).then(data => setInitialData(data))
    // }, []);
    return (
      <div className="App"> 
        <Header/>
        <ProductList />
        <TheAccount />
      </div>
    );
  
}

export default App;
