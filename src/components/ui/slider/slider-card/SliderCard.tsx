import React from 'react';
import { Button, Typography } from '../../../shared';

import './SliderCard.scss';

interface ISliderCardProps {
  /** It's object id */
  id: string;

  /** It's title which will be rendered as a title of card */
  title: string;

  /** It's link for an image */
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
        <Typography className='slider-card__title'
                    variant='h3'
                    size={24} color={'#FFFFFF'}>{title}</Typography>
        <Typography className='slider-card__description'
                    size={14} color={'#FFFFFF'}>{description}</Typography>
        <Button modifiers={['link']} to={`/${id}`} onClick={onClickDetails}>See details</Button>
      </div>
    </div>);
};
