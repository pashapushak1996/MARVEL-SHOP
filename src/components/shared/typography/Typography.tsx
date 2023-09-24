import React from 'react';

import './Typography.scss';

type TypeTypographyVariant =
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6' |
  'span' |
  'p';

type TypeTypographyWeights =
  'normal' |
  'semi-bold' |
  'bold' |
  'black';

type TypeTypographyVariants =
  'body-sm' |
  'body-md' |
  'heading-sm' |
  'heading-md' |
  'heading-lg' |
  'heading-xl';


interface ITypographyProps {
  /** This is element which will be used (h1,h2, ...etc)*/
  as?: TypeTypographyVariant;

  /** This is variant of text (heading-xl, body-md, ...etc)*/
  variant: TypeTypographyVariants;

  /** This is weight of text */
  weight?: TypeTypographyWeights;

  /** This is children */
  children: React.ReactNode;
}

export const Typography: React.FC<ITypographyProps> = ({
                                                         as,
                                                         variant,
                                                         children,
                                                         weight = '',
                                                         ...props
                                                       }) => {
  const Component = as || 'span';

  const classNames = `${variant} ${weight}`;

  return <Component {...props} className={classNames}>{children}</Component>;
};
