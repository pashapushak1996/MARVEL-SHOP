import React from "react";
import cn from "classnames";

import './Input.scss';

interface Props {
    children?: React.ReactNode;
    inputVariants?: Array<string>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export const Input: React.FC<Props> = ({
                                           inputVariants,
                                           value,
                                           onChange
                                       }) => {

    const inputClasses = inputVariants?.map((inputClass: string) => `input--${inputClass}`);

    return (
        <input
            type={'text'}
            value={value}
            onChange={onChange}
            className={cn('input', inputClasses)}/>
    )
};
