import React from 'react';
import Form from './Form';

function Confirmation(props) {
  return (
    <div>
      <h1>Confirmation</h1>
      <Form form={props.form} readOnly />
    </div>
  );
}

Confirmation.defaultProps = {
  form: [],
};

export default Confirmation;
