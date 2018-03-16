import React from 'react';
import classNames from 'classnames';
import { Alert, Card, CardBody, Button } from 'reactstrap';

import './Options.css';

function Options(props) {
  return (
    <div className="options">
      {(props.showErrors && !props.valid) &&
        <Alert color="danger">
          {props.feedback}
        </Alert>
      }
      <div className="options__content">
        {props.options.map(option => {
          const className = classNames(
            'options__card',
            { 'is-selected': option === props.value },
          );
          return (
            <Card key={option} className={className}>
              <CardBody>
                <h2 className="options__title">{option}</h2>
                <Button
                  color="success"
                  onClick={() => props.onChange(option)}
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

Options.defaultProps = {
  options: [],
  option: '',
  onChange: () => {},
};

export default Options;
