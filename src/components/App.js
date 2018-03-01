import React from 'react';
import { Route } from 'react-router-dom';

import BriefPage from '../containers/BriefPage';
import CallPage from '../containers/CallPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import IndexPage from '../containers/IndexPage';
import PlanPage from '../containers/PlanPage';
import NavContainer from '../containers/NavContainer';

import { BRIEF, CALL, CONFIRMATION, PLAN } from '../util/paths';

import './App.css';

function App() {
  return (
    <div className="app">
      <Route path="/" exact component={IndexPage} />
      <Route path={BRIEF} component={BriefPage} />
      <Route path={CALL} component={CallPage} />
      <Route path={CONFIRMATION} component={ConfirmationPage} />
      <Route path={PLAN} component={PlanPage} />
      <NavContainer />
    </div>
  );
}

export default App;
