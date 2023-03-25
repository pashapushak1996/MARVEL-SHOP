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

  /** This is className which will be added into box */

  className?: string;
}

export const Box: React.FC<IBoxProps> = ({
                                           className,
                                           children,
                                           borderRadius,
                                           paddingInline,
                                           paddingBlock,
                                         }) => {
  return (
    <div className={className ? `box ${className}` : 'box'}
         style={{ borderRadius, paddingInline, paddingBlock }}>
      {children}
    </div>
  );
};
