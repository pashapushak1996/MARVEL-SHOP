import React from 'react';

import './Checkbox.scss';

interface ICheckboxProps {
  /** It will define either checkbox is checked */
  isChecked?: boolean;

  /** It's handler for checkbox state */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ isChecked, onChange }) => {

  return (
    <label className='checkbox-container'>
      <input className='checkbox' type='checkbox' checked={isChecked} onChange={onChange} />
      <span className='checkbox-checkmark'></span>
    </label>
  );
};
