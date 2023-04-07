import { RootState } from '@/app/store';

export const getSearchValue = (state: RootState) => state.search.searchValue;