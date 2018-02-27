import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import queryString from 'query-string';

import routes from '../util/routes';
import {
  getFlow,
  getFirstPath,
  getPreviousPath,
  getNextPath,
} from '../util/flows';

import './App.css';

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
