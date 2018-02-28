import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import classNames from 'classnames';

import './Plan.css';

const plans = ['basic', 'standard', 'pro'];

function Plan(props) {
  return (
    <div>
      <h1>Plans</h1>
      <div className="plans">
        {plans.map(plan => {
          const classes = { 'is-selected': plan === props.plan };
          const className = classNames(classes);
          return (
            <Card key={plan} className={className}>
              <CardBody>
                <h2 className="plan-title">{plan}</h2>
                <Button
                  color="success"
                  onClick={() => props.onPlanChange(plan)}
                >
                  Select
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Plan;
