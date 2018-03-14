import React from 'react';
import Options from './Options';
import { getFieldValue } from '../util/form';

const packages = ['basic', 'standard', 'pro'];

function Package(props) {
  return (
    <div>
      <h1>Packages</h1>
      <Options
        options={packages}
        option={getFieldValue(props.form, 'package')}
        onClick={value => props.onChange('package', value)}
      />
    </div>
  );
}

Package.defaultProps = {
  onChange: () => {},
}

export default Package;
