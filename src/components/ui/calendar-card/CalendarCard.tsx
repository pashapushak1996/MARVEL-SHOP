import React, { MouseEvent } from 'react';
import cn from 'classnames';

import { Button, Typography } from '@/components/shared';
import iconSrc from '@/assets/icons/arrow-top-right-icon.svg';

import { extractMonthFromDate, getDateRange } from '@/modules/comics/helpers';

import './CalendarCard.scss';
import { useNavigate } from 'react-router-dom';

export type TypeCalendarCardVariants = 'red' | 'blue' | 'green';

interface ICalendarCardProps {
  /** This is background cover for card */
  cover: string;

  /** This is date (22.02.2022 ...ets)*/
  date: string;

  /** This is variant of card which you can add
   *  as modifier according to BEM methodology (calendar-card--$modifier)*/
  variant: TypeCalendarCardVariants;

  /** This is onClick function for Button */
  onClick: (event: MouseEvent<HTMLElement>) => void;
}


export const CalendarCard: React.FC<ICalendarCardProps> = ({
                                                             cover,
                                                             date,
                                                             variant,
                                                             onClick,
                                                           }) => {

  const classNames = cn('calendar-card', { [`calendar-card--${variant}`]: variant });

  const month = extractMonthFromDate(date);


  return (
    <div className={classNames}>
      <img className='calendar-card__cover' src={cover}
           alt='' />
      <div className='calendar-card__content'>
        <div className='calendar-card__title'>
          <Typography variant='heading-sm'
                      as={'p'}>{month}</Typography>
        </div>
        <div className='calendar-card__button'>
          <Button onClick={onClick}
                  icon={iconSrc}
                  modifiers={['rounded', 'white', 'link']}
                  iconSize={20} />
        </div>
      </div>
    </div>
  );
};
