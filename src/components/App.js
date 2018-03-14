import React from 'react';
import { Route } from 'react-router-dom';

import BriefPage from '../containers/BriefPage';
import CallPage from '../containers/CallPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import PackagePage from '../containers/PackagePage';
import PlanPage from '../containers/PlanPage';
import SwitchBriefPage from '../containers/SwitchBriefPage';
import SwitchFlow from '../containers/SwitchFlowPage';
import NavContainer from '../containers/NavContainer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Route path="/" exact component={SwitchFlow} />
      <Route path="/brief" component={BriefPage} />
      <Route path="/call" component={CallPage} />
      <Route path="/confirmation" component={ConfirmationPage} />
      <Route path="/package" component={PackagePage} />
      <Route path="/plan" component={PlanPage} />
      <Route path="/switch-brief" component={SwitchBriefPage} />
      <NavContainer />
    </div>
  );
}

export default App;
