export type TypeDateDescriptor = 'lastWeek' | 'thisWeek' | 'nextWeek' | 'thisMonth';

export interface IComicsRequestParams {
  limit?: number,
  offset?: number,
  titleStartsWith?: string,
  dateDescriptor?: TypeDateDescriptor
  dateRange?: string
}