import React from 'react';

const LogBtn = (props) => {
  return (
    <button onClick={() => props.onBtnSelect()}>Log State</button>
  );
};

export default LogBtn;