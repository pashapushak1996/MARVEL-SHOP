import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { getSearchValue, setSearchValue } from '@/modules/search';

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const [localSearchValue, setLocalSearchValue] = useState('');
  const searchValue = useAppSelector(getSearchValue);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchValue(value);
  };

  const onClickSearch = () => {
    dispatch(setSearchValue(localSearchValue));
  };

  useEffect(() => {
    return () => {
      dispatch(setSearchValue(''));
    };
  }, []);

  return { searchValue, localSearchValue, handleSearchChange, onClickSearch };
};
