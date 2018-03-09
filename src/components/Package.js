import React from 'react';
import Options from './Options';

const packages = ['basic', 'standard', 'pro'];

function Package(props) {
  return (
    <div>
      <h1>Packages</h1>
      <Options
        options={packages}
        onClick={props.onChange}
      />
    </div>
  );
}

Package.defaultProps = {
  onChange: () => {},
}

export default Package;
