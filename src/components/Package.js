import React from 'react';
import Options from './Options';
import { getFieldByName } from '../util/form';

function Package(props) {
  return (
    <div>
      <h1>Packages</h1>
      <Options
        {...getFieldByName(props.form, 'package')}
        showErrors={props.showErrors}
        onChange={value => props.onChange('package', value)}
      />
    </div>
  );
}

Package.defaultProps = {
  showErrors: false,
  form: [],
  onChange: () => {},
}

export default Package;
