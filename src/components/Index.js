import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Index extends Component {
  componentDidMount() {
    this.props.onFlowChange(this.props.flowKey);
  }

  render() {
    return <Redirect to={this.props.firstPath} />
  }
}

export default Index;
