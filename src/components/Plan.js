import React from 'react';
import Options from './Options';
import { getFieldByName } from '../util/form';

function Plan(props) {
  return (
    <div>
      <h1>Plans</h1>
      <Options
        {...getFieldByName(props.form, 'plan')}
        showErrors={props.showErrors}
        onChange={value => props.onChange('plan', value)}
      />
    </div>
  );
}

Plan.defaultProps = {
  showErrors: false,
  form: [],
  onChange: () => {},
}

export default Plan;
