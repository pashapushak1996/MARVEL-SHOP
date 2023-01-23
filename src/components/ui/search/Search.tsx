import React from 'react';

import { Input } from '../input';
import { Button } from '../button';

import './Search.scss';

import searchIcon from '../../../assets/icons/search-icon.svg';

interface ISearchProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value?: string;
  placeholder: string;
}

export const Search: React.FC<ISearchProps> = (props) => {
  const { onChange, onClick, value, placeholder } = props;

  return (
    <div className='search'>
      <div className='search__input'>
        <Input inputVariants={['white', 'right-padding']}
               onChange={onChange}
               value={value}
               placeholder={placeholder} />
      </div>
      <div className='search__button'>
        <Button buttonTypes={['rounded']} onClick={onClick}>
          <img src={searchIcon} alt='search' width={20} height={20} />
        </Button>
      </div>
    </div>
  );
};
