import React from 'react';

import { Typography } from '@/components/shared';


import './IntroductionPanel.scss';
import { useSearch } from '@/modules/search/hooks/useSearch';
import { Search } from '@/modules/search';

interface IIntroductionPanelProps {
  title: string;
  description: string;
  quote: string;
  quoteAuthor: string;
}

export const IntroductionPanel: React.FC<IIntroductionPanelProps> = (props) => {
  const {
    title,
    quote,
    description,
    quoteAuthor,
  } = props;

  const { handleSearchChange, searchValue, onClickSearch } = useSearch('/comics', 'titleStartsWith');

  return (
    <div className='introduction-panel'>
      <div className='introduction-panel__title'>
        <Typography as={'h1'} variant={'heading-xl'}>{title}</Typography>
      </div>
      <div className='introduction-panel__description'>
        <Typography as={'p'} variant={'body-md'}>{description}</Typography>
      </div>
      <div className='introduction-panel__search'>
        <Search placeholder='Find comics'
                value={searchValue}
                onChange={handleSearchChange}
                onClick={onClickSearch} />
      </div>
      <div className='introduction-panel__quote'>
        <Typography as={'h4'} variant={'heading-md'}>{quote}</Typography>
      </div>
      <span className='introduction-panel__quote-author'>
          {quoteAuthor}
      </span>
    </div>
  );
};
