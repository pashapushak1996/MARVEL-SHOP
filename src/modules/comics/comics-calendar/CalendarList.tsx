import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@/components/layout';
import { CalendarCard } from './calendar-card';

import { getDateRange, subtractMonthsFromDate, TypeMonths } from '@/modules/comics/helpers';

import { buildQueryString } from '@/helpers';
import { getCalendarCardVariant } from '@/modules/comics/helpers/comics-calendar.helper';


interface ICalendarListProps {
  monthQty: TypeMonths;
}

export const CalendarList: React.FC<ICalendarListProps> = ({ monthQty }) => {
  const { arrayOfDates } = subtractMonthsFromDate(monthQty);
  const navigate = useNavigate();


  const handleCalendarCardClick = (dateRange: string) => (event: MouseEvent<HTMLElement>) => {
    navigate({ pathname: '/comics', search: buildQueryString({ dateRange }) });
  };

  return (
    <Grid
      spacing={'lg'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      container>
      {arrayOfDates.map((date, index) => {
          const { color, background } = getCalendarCardVariant(index);

          const { startDate, endDate } = getDateRange(date);

          const dateRange = `${startDate},${endDate}`;

          return (
            <Grid key={date}
                  sm={2}
                  md={4}
                  lg={4} item>
              <CalendarCard date={date}
                            variant={color}
                            cover={background}
                            onClick={handleCalendarCardClick(dateRange)} />
            </Grid>
          );
        },
      )}
    </Grid>
  );
};