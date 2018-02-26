import React, { Component } from 'react';
import Nav from './Nav';

class ConfirmationPage extends Component {
  render() {
    return (
      <div>
        <h1>Confirmation Page</h1>
        <Nav
          previousPath={this.props.previousPath}
          nextPath={this.props.nextPath}
        />
      </div>
    );
  }
}

export default ConfirmationPage;
