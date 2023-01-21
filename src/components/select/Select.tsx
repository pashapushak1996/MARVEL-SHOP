import React from "react";

import './Select.scss';

export interface ISelectOption {
    label: string;
    value: string | number;
}

interface ISelectProps {
    name?: string;
    value?: ISelectOption;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder: string;
    options: Array<ISelectOption>;
}

export const Select: React.FC<ISelectProps> = (props) => {
    const {
        name,
        onChange,
        options,
        placeholder
    } = props;

    return (
        <select name={name} onChange={onChange} className='select'>
            <option value={''}>{placeholder}</option>
            {options.map((option, index) => {
                return <option key={index} value={option.value}>{option.label}</option>
            })
            }
        </select>
    );
};
