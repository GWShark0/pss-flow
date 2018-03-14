import React from 'react';
import Options from './Options';
import { getFieldValue } from '../util/form';

const plans = ['monthly', 'annual'];

function Plan(props) {
  return (
    <div>
      <h1>Plans</h1>
      <Options
        options={plans}
        option={getFieldValue(props.form, 'plan')}
        onClick={value => props.onChange('plan', value)}
      />
    </div>
  );
}

Plan.defaultProps = {
  form: [],
  onChange: () => {},
}

export default Plan;
