import React from 'react';
import Form from './Form';
import Options from './Options';
import { getFieldsByName, getFieldByName } from '../util/form';

function Call(props) {
  return (
    <div>
      <h1>Schedule Call</h1>
      <Options
        {...getFieldByName(props.form, 'time')}
        showErrors={props.showErrors}
        onChange={value => props.onChange('time', value)}
      />
      <hr />
      <Form
        form={getFieldsByName(props.form, ['name', 'phone'])}
        showErrors={props.showErrors}
        onChange={props.onChange}
      />
    </div>
  );
}

Call.defaultProps = {
  showErrors: false,
  onChange: () => {},
}

export default Call;
