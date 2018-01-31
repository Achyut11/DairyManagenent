import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/layouts/Navigationbar'
import CreateProducts from './components/products/CreateProducts'
import CustomerList from './components/products/CustomerList'

class App extends Component {
  render() {
    return (
        <div>
          <NavigationBar />
          <CreateProducts />
        </div>
    );
  }
}

export default App;
