import React from 'react';
import { useAppSelector } from '@/app/hooks';

import { Hero } from '@/components/ui';
import { HomeSection } from './home-section/HomeSection';

import { CharactersList, getCharacters } from '@/modules/characters';
import { CalendarList, ComicsList, useComics } from '@/modules/comics';

import { Loader } from '@/components/shared';

import './HomePage.scss';

export const HomePage: React.FC = () => {
  const characters = useAppSelector(getCharacters);
  const { comics, loading } = useComics({ dateDescriptor: 'lastWeek' });

  const slicedCharacters = characters.slice(0, 5);

  const comicsListSection =
    loading === 'idle'
      ? <Loader />
      : <ComicsList comics={comics} />;


  return (
    <div className='home'>
      <div className='home__hero'>
        <Hero comics={comics} />
      </div>
      <HomeSection title={'Latest releases'}>
        {comicsListSection}
      </HomeSection>
      <HomeSection>
        <CalendarList monthQty={6} />
      </HomeSection>
      <HomeSection title={'Characters'}>
        <CharactersList characters={slicedCharacters} />
      </HomeSection>
    </div>
  );
};
