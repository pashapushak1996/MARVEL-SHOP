import React from "react";
import cn from "classnames";

import './Button.scss';

interface IButtonProps {
    buttonTypes?: Array<string>;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = (props) => {
    const {buttonTypes, children, onClick} = props;

    const buttonClasses = buttonTypes?.map((btnType: string) => `button--${btnType}`);

    return (
        <button className={cn('button', buttonClasses)} onClick={onClick}>
            {children}
        </button>
    );
};
