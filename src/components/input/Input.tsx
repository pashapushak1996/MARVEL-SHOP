import React from "react";
import cn from "classnames";

import './Input.scss';

interface IInputProps {
    children?: React.ReactNode;
    inputVariants?: Array<string>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export const Input: React.FC<IInputProps> = (props) => {
    const {inputVariants, value, onChange} = props;

    const inputClasses = inputVariants?.map((inputClass: string) => `input--${inputClass}`);

    return (
        <input
            type={'text'}
            value={value}
            onChange={onChange}
            className={cn('input', inputClasses)}/>
    );
};
