import React from "react";
import cn from "classnames";

import './Button.scss';

interface Props {
    buttonTypes?: Array<string>;
    children?: React.ReactNode;
    onClick?: () => void;
}


export const Button: React.FC<Props> = ({buttonTypes, children, onClick}) => {

    const buttonClasses = buttonTypes?.map((btnType: string) => `button--${btnType}`);

    return (
        <button className={cn('button', buttonClasses)} onClick={onClick}>
            {children}
        </button>
    )
};
