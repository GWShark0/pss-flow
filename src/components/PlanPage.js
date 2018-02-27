import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import Nav from './Nav';

import './PlanPage.css';

const plans = ['Basic', 'Standard', 'Pro'];

class PlanPage extends Component {
  render() {
    return (
      <div>
        <h1>Plans</h1>
        <div className="plans">
          {plans.map(plan => (
            <Card key={plan}>
              <CardBody>
                <h2>{plan}</h2>
                <Button color="success">Select</Button>
              </CardBody>
            </Card>
          ))}
        </div>
        <Nav
          previousPath={this.props.previousPath}
          nextPath={this.props.nextPath}
        />
      </div>
    );
  }
}

export default PlanPage;
