import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { getSearchValue, setSearchValue } from '@/modules/search';
import { ChangeEvent, useEffect } from 'react';

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(getSearchValue);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchValue(value));
  };

  useEffect(() => {
    return () => {
      dispatch(setSearchValue(''));
    };
  }, []);

  return { searchValue, handleSearchChange };
};
