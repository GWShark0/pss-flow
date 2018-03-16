import React from 'react';
import { Button } from 'reactstrap';
import { isValidForm } from '../util/validation';

import './Nav.css';

function Nav(props) {
  return (
    <nav className="pss-nav">
      {props.previousPage && (
        <Button
          color="link"
          onClick={props.previous}
        >
          Back
        </Button>
      )}
      {' '}
      {props.nextPage && (
        <Button
          color="primary"
          onClick={() => {
            if (isValidForm(props.form)) {
              props.next();
            } else {
              props.showErrors();
            }
          }}
        >
          Next
        </Button>
      )}
      {' '}
      {!props.nextPage && (
        <Button
          color="danger"
          onClick={props.reset}
        >
          Reset
        </Button>
      )}
    </nav>
  );
}

Nav.defaultProps = {
  form: [],
  nextPage: '',
  previousPage: '',
  next: () => {},
  previous: () => {},
  showErrors: () => {},
  reset: () => {},
};

export default Nav;
