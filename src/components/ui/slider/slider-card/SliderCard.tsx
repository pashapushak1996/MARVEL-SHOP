import React from 'react';
import { Button, Typography } from '../../../shared';

import './SliderCard.scss';

interface ISliderCardProps {
  /** It's object id */
  id: string | number;

  /** It's title which will be rendered as a title of card */
  title: string;

  /** It's configurable-link for an image */
  imgSrc: string;

  /** It's description which will be rendered as a paragraph */
  description: string;

  /** It's a function which will be called when button is clicked */
  onClickDetails?: (event: React.MouseEvent) => void;
}

export const SliderCard: React.FC<ISliderCardProps> = ({
                                                         id,
                                                         title,
                                                         imgSrc,
                                                         description,
                                                         onClickDetails,
                                                       }) => {
  return (
    <div className='slider-card'>
      <img className='slider-card__image' src={imgSrc} alt={title} />
      <div className='slider-card__body'>
        <div className='slider-card__title'>
          <Typography as='h3' variant={'heading-md'}>{title}</Typography>
        </div>
        <div className='slider-card__description'>
          <Typography as={'h3'} variant={'body-md'} weight={'normal'}>{description}</Typography>
        </div>
        <Button modifiers={['link']} to={`/${id}`} onClick={onClickDetails}>See details</Button>
      </div>
    </div>);
};
