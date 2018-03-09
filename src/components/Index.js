import React, { Component } from 'react';
import Options from './Options';

const flows = ['call', 'brief', 'package'];

class Index extends Component {
  render() {
    return (
      <div>
        <h1>Flows</h1>
        <Options
          options={flows}
          onClick={(flow) => {
            if (flow === flows[0]) {
              this.props.setNextIndex(0);
            }
            if (flow === flows[1]) {
              this.props.setNextIndex(1);
            }
            if (flow === flows[2]) {
              this.props.setNextIndex(2);
            }
          }}
        />
      </div>
    )
  }
}

Index.defaultProps = {
  setNextIndex: () => {},
}

export default Index;
