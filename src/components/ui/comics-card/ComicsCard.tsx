import React, { useState } from 'react';
import cn from 'classnames';

import { Typography } from '../typography';
import { Button } from '../button';
import { Icon } from '../icon';

import './ComicsCard.scss';

import { IComics } from '../../../models';
import starIcon from '../../../assets/icons/star-icon.svg';

interface IComicsCardProps {
  comics: IComics;
}

export const ComicsCard: React.FC<IComicsCardProps> = ({ comics }) => {
  const {
    rating,
    description,
    cover,
    price,
    title,
  } = comics;

  const priceBlockContent = price ? ('$' + price) : 'Sold';

  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);

  const handleMouseMove = () => {
    setIsMouseEnter(isMouseEnter => !isMouseEnter);
  };

  const className = cn('comics-card', {
    ['comics-card--is-hovered']: isMouseEnter,
  });

  const buttonClassName = cn('comics-card__button', {
    ['comics-card__button--is-visible']: isMouseEnter,
  });

  return (
    <div className={className}
         onMouseEnter={handleMouseMove}
         onMouseLeave={handleMouseMove}>
      <div className='comics-card__cover'>
        <img className='comics-card__cover-img' src={cover} alt='' />
        <span className='comics-card__rating'>
          <Icon iconSrc={starIcon} width={18} height={18} />
          {rating}
        </span>
      </div>
      <div className='comics-card__info'>
        <div className='comics-card__info-left'>
          <Typography className='comics-card__title' variant={'h5'}>{title}</Typography>
        </div>
        <div className='comics-card__info-right'>
          <div className='comics-card__price'>
            {priceBlockContent}
          </div>
          <div className={buttonClassName}>
            <Button>See details</Button>
          </div>
        </div>
      </div>
      <div className='comics-card__overlay'>
        <Typography size={12} className='comics-card__description'>{description}</Typography>
      </div>
    </div>
  );
};
