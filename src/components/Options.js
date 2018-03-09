import React from 'react';
import classNames from 'classnames';
import { Card, CardBody, Button } from 'reactstrap';

import './Options.css';

function Options(props) {
  return (
    <div className="options">
      {props.options.map(option => {
        const classes = { 'is-selected': option === props.option };
        const className = classNames(classes);
        return (
          <Card key={option} className={className}>
            <CardBody>
              <h2 className="option-title">{option}</h2>
              <Button
                color="success"
                onClick={() => props.onClick(option)}
              >
                Select
              </Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

Options.defaultProps = {
  options: [],
  option: '',
  onClick: () => {},
};

export default Options;
