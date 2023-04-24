import React from 'react';
import cn from 'classnames';

import './Input.scss';

interface IInputProps {
  id?: string;
  children?: React.ReactNode;
  inputVariants?: Array<string>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email';
}

export const Input: React.FC<IInputProps> = (props) => {
  const { inputVariants, value, onChange, placeholder, id, type = 'text' } = props;

  const inputClasses = inputVariants?.map((inputClass: string) => `input--${inputClass}`);

  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={cn('input', inputClasses)}
      placeholder={placeholder} />
  );
};
