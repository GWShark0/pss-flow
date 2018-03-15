import React from 'react';
import Form from './Form';

function Brief(props) {
  return (
    <div>
      <h1>Brief</h1>
      <Form form={props.form} onChange={props.onChange} />
    </div>
  );
}

Brief.defaultProps = {
  form: [],
  onChange: () => {},
}

export default Brief;
