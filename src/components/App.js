import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import BriefPage from './BriefPage';
import CallPage from './CallPage';
import ConfirmationPage from './ConfirmationPage';
import PlanPage from './PlanPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/brief" component={BriefPage} />
          <Route path="/call" component={CallPage} />
          <Route path="/confirmation" component={ConfirmationPage} />
          <Route path="/plan" component={PlanPage} />
        </div>
      </Router>
    );
  }
}

export default App;
