import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import queryString from 'query-string';

import BriefPage from './BriefPage';
import CallPage from './CallPage';
import ConfirmationPage from './ConfirmationPage';
import PlanPage from './PlanPage';

import './App.css';

const FLOWS = {
  default: ['/plan', '/call', '/brief', '/confirmation'],
  callFirst: ['/call', '/plan', '/confirmation'],
};

function getFlow(key) {
  switch (key) {
    case 'callFirst':
      return FLOWS.callFirst;
    default:
      return FLOWS.default;
  }
}

function getFirstPath(flow = []) {
  return flow[0];
}

function getPreviousPath(flow = [], currentStep) {
  const index = flow.indexOf(currentStep);
  return (index >= 0) ? flow[index - 1] : undefined;
}

function getNextPath(flow = [], currentStep) {
  const index = flow.indexOf(currentStep);
  return (index >= 0) ? flow[index + 1] : undefined;
}

class App extends Component {

  constructor(props) {
    super(props);

    const query = queryString.parse(this.props.location.search);

    this.state = {
      currentPath: this.props.location.pathname,
      flow: getFlow(query.flow),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.onRouteChanged(nextProps.location.pathname);
    }
  }

  onRouteChanged(nextPath) {
    this.setState({ currentPath: nextPath });
  }

  render() {
    const { flow, currentPath } = this.state;
    const firstPath = getFirstPath(flow);
    const previousPath = getPreviousPath(flow, currentPath);
    const nextPath = getNextPath(flow, currentPath);

    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <Redirect to={firstPath} />
          )}
        />
        <Route
          path="/brief"
          render={() => (
            <BriefPage
              previousPath={previousPath}
              nextPath={nextPath}
            />
          )}
        />
        <Route
          path="/call"
          render={() => (
            <CallPage
              previousPath={previousPath}
              nextPath={nextPath}
            />
          )}
        />
        <Route
          path="/confirmation"
          render={() => (
            <ConfirmationPage
              previousPath={previousPath}
              nextPath={nextPath}
            />
          )}
        />
        <Route
          path="/plan"
          render={() => (
            <PlanPage
              previousPath={previousPath}
              nextPath={nextPath}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
