import React from 'react';

import { Button, Typography } from '../../shared';
import { CardCover } from '../card-cover';

import './ComicCard.scss';

import { IComic } from '../../../types';

interface IComicCardProps {
  comic: IComic;
}

export const ComicCard: React.FC<IComicCardProps> = ({ comic }) => {
  const {
    description,
    price,
    cover,
    title,
  } = comic;

  const priceBlockContent = price ? ('$' + price) : 'Sold';


  return (
    <div className='comics-card'>
      <div className='comics-card__cover'>
        <CardCover coverImage={cover} />
      </div>
      <div className='comics-card__info'>
        <div className='comics-card__info-left'>
          <div className='comics-card__title'>
            <Typography variant={'body-md'} weight={'semi-bold'} as={'h5'}>{title}</Typography>
          </div>

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
        <div className='comics-card__description'>
          <Typography variant={'body-sm'}>{description}</Typography>
        </div>
      </div>
    </div>
  );
};
