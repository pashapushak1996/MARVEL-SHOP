import React from 'react';

import './FieldError.scss';

interface IFieldErrorProps {
  /** It's error message which will be rendered */
  errorMessage: string;
}

export const FieldError: React.FC<IFieldErrorProps> = ({ errorMessage }) => {
  return (
    <div className='field-error'>
      {errorMessage}
    </div>
  );
};