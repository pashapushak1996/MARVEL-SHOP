import moment from 'moment';

export type TypeMonths = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const subtractMonthsFromDate = (monthsQty: TypeMonths, dateString?: string) => {
  const arrayOfDates: Array<string> = [];

  for (let i = 1; i <= monthsQty; i++) {
    const formattedDate =
      moment(dateString).subtract(i, 'month').format('YYYY-MM-DD');

    arrayOfDates.push(formattedDate);
  }

  return { arrayOfDates };
};


export const extractMonthFromDate = (date: string) => {
  const months = moment.months();

  const monthsIndex = Number(date.split('-')[1]);

  return monthsIndex < 12 ? months[monthsIndex - 1] : months[0];
};

export const getDateRange = (date: string) => {
  const startDate = moment(date).startOf('month').format('YYYY-MM-DD');
  const endDate = moment(date).endOf('month').format('YYYY-MM-DD');

  return { startDate, endDate };
};