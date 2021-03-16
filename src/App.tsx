import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Buyflow, { ProductIds } from './buyflow/Buyflow';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <Switch>
            <Route exact path="/buy/insurance_dev">
              <Buyflow productId={ProductIds.devIns} />
            </Route>
            <Route exact path="/">
            <p>Welcome to Getsafe's Developer Insurance</p>
            <Link to="/buy/insurance_dev">Get started!</Link>
            </Route>
            <Route exact path="/purchased=dev_ins">
              <p> Developer Insurance Done!</p>
              <Link to="/">Home</Link>
            </Route>
            <Route exact >
              <h1>OOH SNAP!</h1>
              <p> Not Found!</p>
              <Link to="/">Home</Link>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
