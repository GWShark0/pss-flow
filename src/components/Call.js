import React from 'react';
import Options from './Options';

const times = ['1:00 PM', '2:00 PM', '3:00 PM'];

function Call(props) {
  return (
    <div>
      <h1>Schedule Call</h1>
      <Options
        options={times}
        onClick={props.onChange}
      />
    </div>
  );
}

Call.defaultProps = {
  onChange: () => {},
}

export default Call;
