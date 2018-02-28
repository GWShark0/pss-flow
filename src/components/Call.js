import React from 'react';
import { Button } from 'reactstrap';

import './Call.css';

const times = ['1:00 PM', '2:00 PM', '3:00 PM',]

function Call(props) {
  return (
    <div>
      <h1>Schedule Call</h1>
      <div className="calls">
        {times.map(time => {
          const color = (time === props.time) ? 'primary' : '';
          return (
            <Button
              key={time}
              color={color}
              onClick={() => props.onTimeChange(time)}
            >
              {time}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Call;
