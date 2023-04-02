import React from 'react';

import { Search } from '../../search';
import { Typography } from '../../../shared';


import './HeroWelcome.scss';

interface IHeroWelcomeProps {
  title: string;
  description: string;
  quote: string;
  quoteAuthor: string;
  searchValue?: string;
  onInput?: () => void;
  onClickSearch?: () => void;
}

export const HeroWelcome: React.FC<IHeroWelcomeProps> = (props) => {
  const {
    title,
    quote,
    description,
    quoteAuthor,
    searchValue,
    onInput,
    onClickSearch,
  } = props;

  return (
    <div className='hero-welcome'>
      <div className='hero-welcome__title'>
        <Typography as={'h1'} variant={'heading-xl'}>{title}</Typography>
      </div>
      <div className='hero-welcome__description'>
        <Typography as={'p'} variant={'body-md'}>{description}</Typography>
      </div>
      <div className='hero-welcome__search'>
        <Search placeholder='Find comics'
                value={searchValue}
                onChange={onInput}
                onClick={onClickSearch} />
      </div>
      <div className='hero-welcome__quote'>
        <Typography as={'h4'} variant={'heading-md'}>{quote}</Typography>
      </div>
      <span className='hero-welcome__quote-author'>
          {quoteAuthor}
      </span>
    </div>
  );
};
