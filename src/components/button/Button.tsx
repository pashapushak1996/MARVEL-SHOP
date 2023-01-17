import React from "react";
import classNames from "classnames";

import './Button.scss';

type PropTypes = {
    buttonTypes: Array<string>;
    children?: JSX.Element | string;
}

/* @ts-ignore */
//Todo (Add handler )This is just layout
export const Button: React.FC<PropTypes> = (props) => {

    const buttonClasses = props.buttonTypes.map(btnType => `button--${btnType}`);

    return (
        <button className={classNames('button', buttonClasses)}>
            {props.children}
        </button>
    )
};
