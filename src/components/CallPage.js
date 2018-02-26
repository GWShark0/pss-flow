import React, { Component } from 'react';
import Nav from './Nav';

class CallPage extends Component {
  render() {
    return (
      <div>
        <h1>Call Page</h1>
        <Nav
          previousPath={this.props.previousPath}
          nextPath={this.props.nextPath}
        />
      </div>
    );
  }
}

export default CallPage;
