import React from 'react';

import './Box.scss';

interface IBoxProps {
  /** Children which will be rendered inside component*/
  children: React.ReactNode;

  /** This is border radius for box*/
  borderRadius?: number;

  /** This is padding top and bottom*/
  paddingBlock?: number;

  /** This is padding left and right*/
  paddingInline?: number;
}

export const Box: React.FC<IBoxProps> = ({
                                           children,
                                           borderRadius,
                                           paddingInline,
                                           paddingBlock,
                                         }) => {
  return (
    <div className='box' style={{ borderRadius, paddingInline, paddingBlock }}>
      {children}
    </div>
  );
};
