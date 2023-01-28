import React, { useState } from 'react';
import ReactSelect from 'react-select';

import './Select.scss';

export interface ISelectOption {
  value: string | number,
  label: string
}


interface ISelectProps {
  /** This is placeholder for select */
  placeholder: string;

  /** This is selected option object */
  value: ISelectOption;

  /** This is Array of options objects*/
  options: Array<ISelectOption>;

  /** OnChange handler which receive option object as argument*/
  onChange: (value: ISelectOption | null) => void;
}

export const Select: React.FC<ISelectProps> = (props) => {
  const { value, options, onChange, placeholder } = props;

  // Todo create custom hook in order to change value

  const [selectedOption, setSelectedOption] = useState<ISelectOption>(value);

  const handleSelectChange = (option: ISelectOption | null) => {
    if (option) {
      setSelectedOption(option);
    }

    onChange(option);
  };

  return (
    <ReactSelect value={selectedOption}
                 options={options}
                 classNamePrefix={'select'}
                 placeholder={placeholder}
                 onChange={handleSelectChange} />
  );
};
