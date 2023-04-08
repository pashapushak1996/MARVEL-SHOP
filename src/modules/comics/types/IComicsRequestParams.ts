export type TypeDateDescriptor = 'lastWeek' | 'thisWeek' | 'nextWeek' | 'thisMonth';

export interface IComicsRequestParams {
  limit?: number,
  offset?: number,
  startYear?: number,
  titleStartsWith?: string,
  dateDescriptor?: TypeDateDescriptor
}