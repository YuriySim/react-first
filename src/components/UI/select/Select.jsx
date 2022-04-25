import React from 'react';

import cl from './Select.module.css';

const Select = ({value, onChange, options}) => {
  return (
    <select
      className={cl.select}
      value={ value }
      onChange={e => onChange(e.target.value)}
    >
      {options.map(option =>
        <option
          disabled={option.value ? false : true}
          key={ option.value }
          value={ option.value }
        >
          { option.name }
        </option>
      )}
    </select>
  );
};

export default Select;