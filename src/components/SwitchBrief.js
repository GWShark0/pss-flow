import React from 'react';
import Options from './Options';

const options = ['yes', 'no'];

function SwitchBrief(props) {
  return (
    <div>
      <h1>Fill Out Brief?</h1>
      <Options
        options={options}
        onClick={option => {
          if (option === 'no') {
            props.setNextIndex(0);
          } else {
            props.setNextIndex(1);
          }
        }}
      />
    </div>
  );
}

SwitchBrief.defaultProps = {
  setNextIndex: () => {},
}

export default SwitchBrief;
