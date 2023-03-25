import React from 'react';
import ReactSelect from 'react-select';

import './Select.scss';

export interface ISelectOption {
  value: string | number,
  label: string
}


interface ISelectProps {
  /** This is selected option object */
  selectedOption: ISelectOption;

  /** This is Array of options objects*/
  options: Array<ISelectOption>;

  /** OnChange handler which receive option object as argument*/
  onChange: (value: ISelectOption | null) => void;
}

export const Select: React.FC<ISelectProps> = (props) => {
  const { selectedOption, options, onChange } = props;

  return (
    <ReactSelect value={selectedOption}
                 options={options}
                 classNamePrefix={'select'}
                 onChange={onChange} />
  );
};
