import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import classNames from 'classnames';
import Nav from './Nav';

import './PlanPage.css';

const plans = ['basic', 'standard', 'pro'];

class PlanPage extends Component {
  render() {
    return (
      <div>
        <h1>Plans</h1>
        <div className="plans">
          {plans.map(plan => {
            const classes = { 'is-selected': plan === this.props.plan };
            const className = classNames(classes);
            return (
              <Card key={plan} className={className}>
                <CardBody>
                  <h2 className="plan-title">{plan}</h2>
                  <Button
                    color="success"
                    onClick={() => this.props.onPlanChange(plan)}
                  >
                    Select
                  </Button>
                </CardBody>
              </Card>
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

export default PlanPage;
