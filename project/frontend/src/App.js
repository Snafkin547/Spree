import React, { useState, useEffect, Component} from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
    const [initialData, setInitialData] = this.useState([{}]);

    useEffect(()=> {
        fetch("/").then(response => response.json).then(data => setInitialData(data))
    }, []);
    return (
      <div className="App"> 
      <h1>{initialData}</h1>
      <header><img src="../public/img/iphone13-blue.jpg"></img></header>     
         <ProductList />
      </div>
    );
  
}

export default App;
