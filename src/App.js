import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Symbol from './components/Symbol';
import RoutedOrder from './components/RoutedOrder';
import ExecutionReport from './components/ExecutionReport';
import ParentOrder from './components/ParentOrder';
import AccountInfo from './components/AccountInfo';
import NotFound from './components/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="wrapper">
          <Header />
            <Router>
              <nav className="navbar header">
                <ul className="navbar-nav">
                  <li><Link to={'/exchange/avaliableSymbols'} className="nav-link">Symbol</Link></li>
                  <li><Link to={'/exchange/routedOrder/'} className="nav-link">Routed Order</Link></li>
                  <li><Link to={'/exchange/executionReport/'} className="nav-link">Execution Report</Link></li>
                  <li><Link to={'/exchange/parent/'} className="nav-link">Parent Order</Link></li>
                  <li><Link to={'/exchange/accounts'} className="nav-link">Account</Link></li>
                </ul>
              </nav>
              <hr />
              <Switch>
                  <Route exact path='/' component={Symbol} />
                  <Route exact path='/exchange/avaliableSymbols' component={Symbol} />
                  <Route path='/exchange/routedOrder/' component={RoutedOrder} />
                  <Route path='/exchange/executionReport/' component={ExecutionReport} />
                  <Route path='/exchange/parent/' component={ParentOrder} />
                  <Route path='/exchange/accounts' component={AccountInfo} />
                  <Route component={NotFound} />
              </Switch>
            </Router>
          <Footer />
        </div>
      </Container>
    );
  }
}

export default App;
