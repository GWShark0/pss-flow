import React from 'react';
import Options from './Options';

const options = ['no', 'yes'];

function SwitchBrief(props) {
  return (
    <div>
      <h1>Fill Out Brief?</h1>
      <Options
        options={options}
        value={options[props.flowIndex]}
        onChange={option => {
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
  flowIndex: 0,
  setNextIndex: () => {},
}

export default SwitchBrief;
