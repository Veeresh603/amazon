import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import HeaderTwo from './HeaderTwo';

function App() {
 


return (
  <Router>
    <div className="app">
    <Switch>
  <Route path="/checkout">
  <Header />
    <h1>checkout</h1>
  </Route>
  <Route path="/login">
  <Header />
    <h1>login</h1>
  </Route>
  <Route path="/">
    <Header />
    <HeaderTwo />
      <Home />
  </Route>
    </Switch>
 
  </div>
  </Router>

)
}
export default App;
