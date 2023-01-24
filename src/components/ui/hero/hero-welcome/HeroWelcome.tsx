import React from 'react';

import { Search } from '../../search';

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
      <h1 className='hero-welcome__title'>{title}</h1>
      <p className='hero-welcome__description'>{description}</p>
      <div className='hero-welcome__search'>
        <Search placeholder='Find comics'
                value={searchValue}
                onChange={onInput}
                onClick={onClickSearch} />
      </div>
      <div className='hero-welcome__quote'>
        {quote}
      </div>
      <span className='hero-welcome__quote-author'>
          {quoteAuthor}
      </span>
    </div>
  );
};
