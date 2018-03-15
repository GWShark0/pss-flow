import React from 'react';
import { Button } from 'reactstrap';

import './Nav.css';

function Nav(props) {
  return (
    <nav className="pss-nav">
      {props.previousPage && (
        <Button color="link" onClick={props.previous}>
          Back
        </Button>
      )}
      {' '}
      {props.nextPage && (
        <Button color="primary" onClick={props.next}>
          Next
        </Button>
      )}
      {' '}
      {!props.nextPage && (
        <Button color="danger" onClick={props.reset}>
          Reset
        </Button>
      )}
    </nav>
  );
}

Nav.defaultProps = {
  nextPage: '',
  previousPage: '',
  next: () => {},
  previous: () => {},
  reset: () => {},
};

export default Nav;
