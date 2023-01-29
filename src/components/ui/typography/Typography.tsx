import React, { HTMLAttributes } from 'react';

type TypeTypographyVariant =
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6';

type TypeTypographyWeights =
  100 |
  200 |
  300 |
  400 |
  500 |
  600 |
  700 |
  800 |
  900;


interface ITypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  /** This is variant of typography (h1,h2, ...etc)*/
  variant?: TypeTypographyVariant;

  /** This is class for element */
  className?: string;

  /** This is font-color for element*/
  color?: string;

  /** This is font-size for element */
  size?: number;

  /** This is */
  weight?: TypeTypographyWeights;
}

export const Typography: React.FC<ITypographyProps> = ({
                                                         variant,
                                                         className,
                                                         children,
                                                         size,
                                                         color,
                                                         weight,
                                                         ...props
                                                       }) => {
  const Component = variant || 'p';

  const inlineStyles =
    size || color || weight
      ? { fontSize: size, color: color, fontWeight: weight }
      : {};

  return <Component {...props} className={className} style={inlineStyles}>{children}</Component>;
};
