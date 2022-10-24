import React from 'react';

const Time = () => {
  return (
    <div>
      <ul class="steps">
        <li class="step step-info">Choose courses</li>
        <li class="step step-info">Enroll courses</li>
        <li class="step step-secondary">Start journey</li>
        <li class="step step-secondary">Complete Journey</li>
        <li class="step step-info">Take your certificate</li>
        <li class="step step-error" data-content="?">Grab your Moon</li>
      </ul>
    </div>
  );
};

export default Time;