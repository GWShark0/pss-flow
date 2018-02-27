import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import cloneDeep from 'lodash/cloneDeep';

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

    this.state = {
      flow: getFlow(),
      brief: [
        {
          label: 'Name',
          name: 'name',
          placeholder: 'Your Name',
          type: 'text',
          value: '',
        },
        {
          name: 'email',
          label: 'Email',
          placeholder: 'Your Email',
          type: 'email',
          value: '',
        },
      ],
      time: '',
      plan: '',
    }
  }

  onBriefChange = (index, value) => {
    const brief = cloneDeep(this.state.brief);
    brief[index].value = value;
    this.setState({ brief });
  }

  onCallChange = (time) => {
    this.setState({ time });
  }

  onPlanChange = (plan) => {
    this.setState({ plan });
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
                brief={this.state.brief}
                time={this.state.time}
                plan={this.state.plan}
                previousPath={{ pathname: previousPath, search }}
                nextPath={{ pathname: nextPath, search }}
                onBriefChange={this.onBriefChange}
                onCallChange={this.onCallChange}
                onPlanChange={this.onPlanChange}
              />
            )}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(App);
