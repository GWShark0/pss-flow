import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import Nav from './Nav';

class CallPage extends Component {
  render() {
    return (
      <div>
        <h1>Schedule Call</h1>
        <ButtonGroup>
          <Button>1:00 PM</Button>
          <Button>2:00 PM</Button>
          <Button>3:00 PM</Button>
        </ButtonGroup>
        <Nav
          previousPath={this.props.previousPath}
          nextPath={this.props.nextPath}
        />
      </div>
    );
  }
}

export default CallPage;
