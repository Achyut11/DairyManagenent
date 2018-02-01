import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/layouts/Navigationbar'
import CreateProducts from './components/products/CreateProducts'
import Sidebar from './components/layouts/Sidebar'
import {Switch, Route} from 'react-router-dom'
import CustomerList from './components/customers/CustomerList'

class App extends Component {
  render() {
    return (
        <div>
          <NavigationBar />
          <Sidebar />
          <Switch>
            <Route path="/create" component={CreateProducts} />
            <Route path="/customerList" component={CustomerList} />
          </Switch>
        </div>
    );
  }
}

export default App;
