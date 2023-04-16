import React, { useEffect } from 'react';
import { useAppSelector } from '@/app/hooks';
import { useNavigate } from 'react-router-dom';

import { Hero } from '@/components/ui';
import { HomeSection } from './home-section/HomeSection';

import { CharactersList, getCharacters } from '@/modules/characters';
import { CalendarList, ComicsList, useComics } from '@/modules/comics';
import { getSearchValue } from '@/modules/search';

import { Loader } from '@/components/shared';
import { buildQueryString } from '@/helpers';

import './HomePage.scss';

export const HomePage: React.FC = () => {
  const searchValue = useAppSelector(getSearchValue);
  const characters = useAppSelector(getCharacters);
  const navigate = useNavigate();
  const { comics, loading } = useComics({ dateDescriptor: 'lastWeek' });

  const slicedCharacters = characters.slice(0, 5);

  const comicsListSection =
    loading === 'idle'
      ? <Loader />
      : <ComicsList comics={comics} />;

  useEffect(() => {
    if (searchValue) {
      navigate({
        pathname: '/comics',
        search: buildQueryString({ titleStartsWith: searchValue }),
      });
    }
  }, [searchValue]);

  return (
    <div className='home'>
      <div className='home__hero'>
        <Hero comics={comics} />
      </div>
      <HomeSection title={'Latest releases'}>
        {comicsListSection}
      </HomeSection>
      <HomeSection>
        <CalendarList monthQty={3} />
      </HomeSection>
      <HomeSection title={'Characters'}>
        <CharactersList characters={slicedCharacters} />
      </HomeSection>
    </div>
  );
};
