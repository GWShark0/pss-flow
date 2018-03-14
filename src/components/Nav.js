import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import './Nav.css';

function Nav(props) {
  return (
    <nav className="pss-nav">
      {props.previousPage && (
        <Button
          color="link"
          tag={Link}
          to={props.previousPage}
        >
          Back
        </Button>
      )}
      {' '}
      {props.nextPage && (
        <Button
          color="primary"
          tag={Link}
          to={props.nextPage}
        >
          Next
        </Button>
      )}
      {' '}
      {!props.nextPage && (
        <Button
          color="danger"
          tag={Link}
          to=""
          onClick={props.reset}
        >
          Reset
        </Button>
      )}
    </nav>
  );
}

Nav.defaultProps = {
  nextPage: '',
  previousPage: '',
  reset: () => {}
}

export default Nav;
