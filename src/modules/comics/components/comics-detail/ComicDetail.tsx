import React from 'react';

import { Typography } from '../../../../components/shared';
import { CardCover } from '../../../../components/ui/card-cover';

import './ComicDetail.scss';


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
        <div className='comic-detail__title'>
          <Typography as={'h2'} variant={'heading-lg'}>{title}</Typography>
        </div>

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
          <div className='comic-detail__description-title'>
            <Typography
              as={'h6'}
              variant={'body-md'}
              weight={'semi-bold'}>Description</Typography>
          </div>
          <div className='comic-detail__description-text'>
            <Typography variant={'body-sm'}>{description || 'There isn`t any description'}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
