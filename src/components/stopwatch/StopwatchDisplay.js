import React from 'react';
import './StopWatch.css';

const StopwatchDisplay = ({formatTime, currentTimeMs, currentTimeMin, currentTimeSec}) => {
    return (
      <div className={'stopwatch__display'}>
        <span>
          {formatTime(currentTimeMin)}:
          {formatTime(currentTimeSec)}:
          {formatTime(currentTimeMs, 'ms')}
        </span>
      </div>
    );
}

export default StopwatchDisplay;
