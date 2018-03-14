import React from 'react';
import Form from './Form';
import Options from './Options';
import { getFieldValue, pickFields } from '../util/form';

const times = ['1:00 PM', '2:00 PM', '3:00 PM'];

function Call(props) {
  return (
    <div>
      <h1>Schedule Call</h1>
      <Form
        form={pickFields(props.form, ['name', 'phone'])}
        onChange={props.onChange}
      />
      <Options
        options={times}
        option={getFieldValue(props.form, 'time')}
        onClick={value => props.onChange('time', value)}
      />
    </div>
  );
}

Call.defaultProps = {
  onChange: () => {},
}

export default Call;
