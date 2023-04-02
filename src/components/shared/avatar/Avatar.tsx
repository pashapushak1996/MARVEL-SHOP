import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

import './Avatar.scss';

interface IAvatarProps extends HTMLAttributes<HTMLImageElement> {
  /** This is path to image (Profile image) */
  avatarSrc: string;

  /** This is width of image */
  width: number,

  /** This is height of image */
  height: number,

  /** This is alt for image (When image is not downloaded it will be a text instead of image) */
  avatarAlt?: string;

  /** There are modifiers according to BEM Methodology (avatar--$modifier) }*/
  modifiers?: Array<string>;
}

export const Avatar: React.FC<IAvatarProps> = ({
                                                 avatarSrc,
                                                 avatarAlt,
                                                 modifiers,
                                                 ...props
                                               }) => {

  const avatarClasses = modifiers?.map(modifier => `avatar--${modifier}`);

  return <img className={cn('avatar',avatarClasses)} src={avatarSrc} alt={avatarAlt} {...props} />;
};

