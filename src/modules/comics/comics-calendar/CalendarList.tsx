import React, { MouseEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@/components/layout';
import { CalendarCard } from './calendar-card';
import { getDateRange, subtractMonthsFromDate, TypeMonths } from '@/modules/comics/helpers';
import { buildQueryString } from '@/helpers';
import { TypeCalendarCardVariants } from '@/modules/comics/comics-calendar/calendar-card/CalendarCard';

import calendarPictureOne from '@/assets/calendar-picture-1.jpg';
import calendarPictureTwo from '@/assets/calendar-picture-2.jpg';
import calendarPictureThree from '@/assets/calendar-picture-3.jpg';


interface ICalendarListProps {
  monthQty: TypeMonths;
}

interface ICalendarCardVariant {
  background: string;
  color: TypeCalendarCardVariants;
}

export const CalendarList: React.FC<ICalendarListProps> = ({ monthQty }) => {
  const { arrayOfDates } = subtractMonthsFromDate(monthQty);
  const navigate = useNavigate();

  const variants: Array<ICalendarCardVariant> = [{
    background: calendarPictureOne,
    color: 'blue',
  }, {
    background: calendarPictureTwo,
    color: 'red',
  }, {
    background: calendarPictureThree,
    color: 'green',
  }];


  const currentVariant = useRef(0);

  const handleCalendarCardClick = (dateRange: string) => (event: MouseEvent<HTMLElement>) => {
    navigate({ pathname: '/comics', search: buildQueryString({ dateRange }) });
  };

  return (
    <Grid
      spacing={'lg'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      container>
      {arrayOfDates.map(date => {

          currentVariant.current = (currentVariant.current + 1) % variants.length;

          const { startDate, endDate } = getDateRange(date);

          const dateRange = `${startDate},${endDate}`;

          return (
            <Grid key={date}
                  sm={2}
                  md={4}
                  lg={4} item>
              <CalendarCard date={date}
                            variant={variants[currentVariant.current].color}
                            cover={variants[currentVariant.current].background}
                            onClick={handleCalendarCardClick(dateRange)} />
            </Grid>
          );
        },
      )}
    </Grid>
  );
};