import React from 'react';

import './Container.scss';

interface IContainer {
  children?: React.ReactNode;
}

export const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div className='container'>{children}</div>
  );
};
