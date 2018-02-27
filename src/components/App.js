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

function getPreviousPath(flow = [], currentPath) {
  const index = flow.indexOf(currentPath);
  return (index >= 0) ? flow[index - 1] : undefined;
}

function getNextPath(flow = [], currentPath) {
  const index = flow.indexOf(currentPath);
  return (index >= 0) ? flow[index + 1] : undefined;
}

const routes = [
  {
    path: '/brief',
    page: BriefPage,
  },
  {
    path: '/call',
    page: CallPage,
  },
  {
    path: '/confirmation',
    page: ConfirmationPage,
  },
  {
    path: '/plan',
    page: PlanPage,
  },
];

class App extends Component {

  constructor(props) {
    super(props);

    const query = queryString.parse(this.props.location.search);

    this.state = {
      flow: getFlow(query.flow),
    }
  }

  render() {
    const { flow } = this.state;
    const { pathname, search } = this.props.location;

    const firstPath = getFirstPath(flow);
    const previousPath = getPreviousPath(flow, pathname);
    const nextPath = getNextPath(flow, pathname);

    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <Redirect to={{ pathname: firstPath, search }} />
          )}
        />
        {routes.map(({ path, page: Page }) => (
          <Route
            key={path}
            path={path}
            render={() => (
              <Page
                previousPath={{ pathname: previousPath, search }}
                nextPath={{ pathname: nextPath, search }}
              />
            )}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(App);
