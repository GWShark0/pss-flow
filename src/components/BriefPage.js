import React, { Component } from 'react';
import Nav from './Nav';

class BriefPage extends Component {
  render() {
    return (
      <div>
        <h1>Brief Page</h1>
        <Nav
          previousPath={this.props.previousPath}
          nextPath={this.props.nextPath}
        />
      </div>
    );
  }
}

export default BriefPage;
