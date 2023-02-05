import React, { useState } from 'react';
import cn from 'classnames';

import './ComicsCard.scss';

import { Typography } from '../typography';
import { Button } from '../button';
import { IComics } from '../../../models';
import starIcon from '../../../assets/icons/star-icon.svg';
import { Icon } from '../icon';

interface IComicsCardProps {
  comics: IComics;
}

export const ComicsCard: React.FC<IComicsCardProps> = ({ comics }) => {
  const { title, company, price, rating, description, cover } = comics;

  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);

  const handleMouseMove = () => {
    setTimeout(() => {
      setIsMouseEnter(isMouseEnter => !isMouseEnter);
    }, 100);
  };

  const className = cn('comics-card', {
    ['comics-card--is-hovered']: isMouseEnter,
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
          <Typography className='comics-card__company'>{company}</Typography>
        </div>
        <div className='comics-card__info-right'>
          <div className='comics-card__price'>
            ${price}
          </div>
          <div className='comics-card__button'>
            {isMouseEnter && <Button>See details</Button>}
          </div>
        </div>
      </div>
      <div className='comics-card__overlay'>
        <Typography size={12} className='comics-card__description'>{description}</Typography>
      </div>
    </div>
  );
};
