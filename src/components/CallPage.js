import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Nav from './Nav';

import './CallPage.css';

const times = ['1:00 PM', '2:00 PM', '3:00 PM',]

class CallPage extends Component {
  render() {
    return (
      <div>
        <h1>Schedule Call</h1>
        <div className="calls">
          {times.map(time => {
            const color = (time === this.props.time) ? 'primary' : '';
            return (
              <Button
                key={time}
                color={color}
                onClick={() => this.props.onCallChange(time)}
              >
                {time}
              </Button>
            );
          })}
        </div>
        <Nav
          previousPath={this.props.previousPath}
          nextPath={this.props.nextPath}
        />
      </div>
    );
  }
}

export default CallPage;
