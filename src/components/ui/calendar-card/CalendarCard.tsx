import React from 'react';
import cn from 'classnames';

import './CalendarCard.scss';

import iconSrc from '../../../assets/icons/arrow-top-right-icon.svg';
import { Typography } from '../typography';
import { Button } from '../button';

type TypeCalendarCardVariants = 'red' | 'blue' | 'green';

interface ICalendarCardProps {
  /** This is background cover for card */
  cover: string;

  /** This is title or date (February 2022,Jan 2022, ...ets)*/
  title: string;

  /** This is variant of card which you can add
   *  as modifier according to BEM methodology (calendar-card--$modifier)*/
  variant: TypeCalendarCardVariants;
}

export const CalendarCard: React.FC<ICalendarCardProps> = ({
                                                             cover,
                                                             title,
                                                             variant,
                                                           }) => {

  const classNames = cn('calendar-card', { [`calendar-card--${variant}`]: variant });

  return (
    <div className={classNames}>
      <img className='calendar-card__cover' src={cover}
           alt='' />
      <div className='calendar-card__content'>
        <Typography className='calendar-card__title'
                    size={24}
                    color={'white'}
                    weight={700}>{title}</Typography>
        <div className='calendar-card__button'>
          {/* TODO You have to add link there*/}
          <Button icon={iconSrc} modifiers={['rounded', 'white', 'link']}
                  to={'#'} iconSize={20} />
        </div>
      </div>
    </div>
  );
};
