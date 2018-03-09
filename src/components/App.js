import React from 'react';
import { Route } from 'react-router-dom';

import IndexPage from '../containers/IndexPage';
import BriefPage from '../containers/BriefPage';
import CallPage from '../containers/CallPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import PackagePage from '../containers/PackagePage';
import PlanPage from '../containers/PlanPage';
import SwitchBriefPage from '../containers/SwitchBriefPage';
import NavContainer from '../containers/NavContainer';

import {
  INDEX,
  BRIEF,
  CALL,
  CONFIRMATION,
  PACKAGE,
  PLAN,
  SWITCH_BRIEF,
} from '../util/flow';

import './App.css';

function App() {
  return (
    <div className="app">
      <Route path={INDEX} exact component={IndexPage} />
      <Route path={BRIEF} component={BriefPage} />
      <Route path={CALL} component={CallPage} />
      <Route path={CONFIRMATION} component={ConfirmationPage} />
      <Route path={PACKAGE} component={PackagePage} />
      <Route path={PLAN} component={PlanPage} />
      <Route path={SWITCH_BRIEF} component={SwitchBriefPage} />
      <NavContainer />
    </div>
  );
}

export default App;
