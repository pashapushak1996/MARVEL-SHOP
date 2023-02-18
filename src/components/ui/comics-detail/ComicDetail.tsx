import React from 'react';
import { Typography } from '../typography';

import './ComicDetail.scss';

import { CardCover } from '../card-cover';

interface ICardDetail {
  /** This is description of comic */
  description: string;

  /** This is date when comic was created */
  date: string;

  /** This is number of page which have comic */
  pages: number | string;

  /** This is image src which will be rendered as cover*/
  cover: string;

  /** This is comic title */
  title: string;

  /** This is comic price */
  price: number | null;
}

export const ComicDetail: React.FC<ICardDetail> = ({
                                                     title,
                                                     cover,
                                                     description,
                                                     date,
                                                     pages,
                                                     price,
                                                   }) => {

  return (
    <div className='comic-detail'>
      <div className='comic-detail__cover'>
        <CardCover coverImage={cover} />
      </div>
      <div className='comic-detail__content'>
        <Typography className='comic-detail__title'
                    size={36}
                    weight={500}
                    variant={'h2'}>{title}</Typography>
        <div className='comic-detail__info'>
          <div className='comic-detail__info-item'>
            <strong>Pages:</strong>
            <strong>Date:</strong>
            <strong>Price:</strong>
          </div>
          <div className='comic-detail__info-item'>
            <span>{pages}</span>
            <span>{date}</span>
            <span>{price || 'Not available'}</span>
          </div>
        </div>
        <div className='comic-detail__description'>
          <Typography className='comic-detail__description-title'
                      size={16}
                      weight={500}
                      variant={'h6'}>Description</Typography>
          <Typography className='comic-detail__description-text'
                      size={12}>
            {description || 'There isn`t any description'}
          </Typography>
        </div>
      </div>
    </div>
  );
};
