import React from 'react';

import { Search } from '../../search';

import './HeroWelcome.scss';
import { Typography } from '../../typography';

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
      <Typography className='hero-welcome__title'
                  size={48}
                  weight={900}
                  variant={'h1'}>{title}</Typography>
      <Typography className='hero-welcome__description' size={14}>{description}</Typography>
      <div className='hero-welcome__search'>
        <Search placeholder='Find comics'
                value={searchValue}
                onChange={onInput}
                onClick={onClickSearch} />
      </div>
      <Typography className='hero-welcome__quote'
                  size={24}
                  weight={500}
      >
        {quote}
      </Typography>
      <span className='hero-welcome__quote-author'>
          {quoteAuthor}
      </span>
    </div>
  );
};
