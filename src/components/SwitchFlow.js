import React from 'react';
import Options from './Options';

const flows = ['call', 'brief', 'package'];

function SwitchFlow(props) {
  return (
    <div>
      <h1>Flows</h1>
      <Options
        options={flows}
        option={flows[props.flowIndex]}
        onClick={flow => {
          if (flow === flows[0]) {
            props.setNextIndex(0);
          }
          if (flow === flows[1]) {
            props.setNextIndex(1);
          }
          if (flow === flows[2]) {
            props.setNextIndex(2);
          }
        }}
      />
    </div>
  );
}

SwitchFlow.defaultProps = {
  flowIndex: 0,
  setNextIndex: () => {},
}

export default SwitchFlow;
