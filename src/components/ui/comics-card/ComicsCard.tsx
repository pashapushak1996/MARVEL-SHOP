import React from 'react';

import { Typography } from '../typography';
import { Button } from '../button';

import './ComicsCard.scss';

import { IComic } from '../../../models';
import { CardCover } from '../card-cover';

interface IComicsCardProps {
  comics: IComic;
}

export const ComicsCard: React.FC<IComicsCardProps> = ({ comics }) => {
  const {
    description,
    price,
    cover,
    title,
  } = comics;

  const priceBlockContent = price ? ('$' + price) : 'Sold';


  return (
    <div className='comics-card'>
      <div className='comics-card__cover'>
        <CardCover coverImage={cover} />
      </div>
      <div className='comics-card__info'>
        <div className='comics-card__info-left'>
          <Typography className='comics-card__title' variant='h5'>{title}</Typography>
        </div>
        <div className='comics-card__info-right'>
          <div className='comics-card__price'>
            {priceBlockContent}
          </div>
          <div className='comics-card__button'>
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
