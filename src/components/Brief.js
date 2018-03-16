import React from 'react';
import Form from './Form';

function Brief(props) {
  return (
    <div>
      <h1>Brief</h1>
      <Form {...props} />
    </div>
  );
}

Brief.defaultProps = {
  showErrors: false,
  form: [],
  onChange: () => {},
}

export default Brief;
