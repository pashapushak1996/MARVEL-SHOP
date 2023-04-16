import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildQueryString } from '@/helpers';

export const useSearch = (pathname: string, searchParam: string) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const onClickSearch = () => {
    navigate({
      pathname,
      search: buildQueryString({ [searchParam]: searchValue }),
    });
  };


  return { searchValue, handleSearchChange, onClickSearch };
};
