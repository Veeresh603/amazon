import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import C_arousel from './C_arousel';

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
    <C_arousel />
  </Route>
    </Switch>
 
  </div>
  </Router>

)
}
export default App;
