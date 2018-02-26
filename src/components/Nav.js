import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function Nav(props) {
  const {
    previousPath,
    nextPath,
  } = props;

  return (
    <nav>
      {previousPath && (
        <Button tag={Link} to={previousPath} color="link">
          Back
        </Button>
      )}
      {' '}
      {nextPath && (
        <Button tag={Link} to={nextPath} color="primary">
          Next
        </Button>
      )}
    </nav>
  )
}
export default Nav;
