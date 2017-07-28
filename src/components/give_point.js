import React from 'react';

const GivePoint = (props) => {
  return (
    <button onClick={() => {props.giveTd()}}>Click Me!</button>
  );
};

export default GivePoint;