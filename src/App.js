import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomePage';
import Quote from './AboutPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="d-flex align-items-center justify-content-between">
            <h1 className="px-5"><b>Math Magicians</b></h1>
            <ul className="d-flex list-unstyled mx-5">
              <li className="nav-li-links">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-li-links">
                <Link to="/calculator">Calculator</Link>
              </li>
              <li className="nav-li-Llinks">
                <Link to="/quote">Quote</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
