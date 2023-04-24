import React from 'react';
import cn from 'classnames';

import './FieldError.scss';

interface IFieldErrorProps {
  /** It's custom className */
  className?: string;

  /** It's error message which will be rendered */
  errorMessage: string;

  /** It's describe if error will be rendered */
  isVisible: boolean;
}

export const FieldError: React.FC<IFieldErrorProps> = ({ isVisible, errorMessage, className }) => {
  let classNames = cn('field-error', {
    'field-error--is-visible': isVisible,
  });

  if (className) {
    classNames += ` ${className}`;
  }

  return (
    <div className={classNames}>
      {errorMessage}
    </div>
  );
};