import React from 'react';

import cl from './Switch.module.css';

const Switch = ({keySwitch, setKeySwitch}) => {
  return (
    <label className={cl.switch}>
      <input type="checkbox" onChange={() => setKeySwitch(!keySwitch)}/>
      <span className={cl.slider}></span>
    </label>
  );
};

export default Switch;