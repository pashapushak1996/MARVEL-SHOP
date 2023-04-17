import moment from 'moment';

export type TypeMonths = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/** Subtracts months from date
 * @param {TypeMonths} monthsQty - quantity of month which should be subtracted
 * @param {string} dateString - date as string
 * @returns array months which were subtracted
 * */

export const subtractMonthsFromDate = (monthsQty: TypeMonths, dateString?: string) => {
  const arrayOfDates: Array<string> = [];

  for (let i = 1; i <= monthsQty; i++) {
    const formattedDate =
      moment(dateString).subtract(i, 'month').format('YYYY-MM-DD');

    arrayOfDates.push(formattedDate);
  }

  return { arrayOfDates };
};

/**
 * Extracts month from date and return month as string (January, February, etc...)
 * @param {string} date - date as string (example 2023-03-31)
 * (date should be YYYY-MM-DD where YYYY-year, MM-month, DD-day)
 * @returns month as string (January, February, etc...) */
export const extractMonthFromDate = (date: string) => {
  const months = moment.months();

  const monthsIndex = Number(date.split('-')[1]);

  return monthsIndex < 12 ? months[monthsIndex - 1] : months[0];
};

/**
 * Returns first day and last day in month.
 * @param {string} date - date as string
 * @returns object which consist of first day and last day of month as date sting*/

export const getDateRange = (date: string) => {
  const startDate = moment(date).startOf('month').format('YYYY-MM-DD');
  const endDate = moment(date).endOf('month').format('YYYY-MM-DD');

  return { startDate, endDate };
};

/**
 * Selects a calendar card variant based on the provided index.
 * The variant is selected from a pre-defined list of variants.
 * If the index is out of range, it is wrapped around to the beginning of the list.
 *
 * @param index - The index used to select the calendar card variant.
 * @returns The selected calendar card variant.
 */

import { TypeCalendarCardVariants } from '@/modules/comics/comics-calendar';

import calendarPictureOne from '@/assets/calendar-picture-1.jpg';
import calendarPictureTwo from '@/assets/calendar-picture-2.jpg';
import calendarPictureThree from '@/assets/calendar-picture-3.jpg';

interface ICalendarCardVariant {
  background: string;
  color: TypeCalendarCardVariants;
}

export const getCalendarCardVariant = (index: number) => {
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

  const currentIndex = (index + 1) % variants.length;

  return variants[currentIndex];
};