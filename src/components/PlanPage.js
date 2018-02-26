import React, { Component } from 'react';
import Nav from './Nav';

class PlanPage extends Component {
  render() {
    return (
      <div>
        <h1>Plan Page</h1>
        <Nav
          previousPath={this.props.previousPath}
          nextPath={this.props.nextPath}
        />
      </div>
    );
  }
}

export default PlanPage;
