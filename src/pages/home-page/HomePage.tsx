import React from 'react';
import { useAppSelector } from '@/app/hooks';

import { Hero } from '@/components/ui';
import { HomeSection } from './home-section/HomeSection';

import { CharactersList, getCharacters } from '@/modules/characters';
import { ComicsList, getComics, getComicsByParam } from '@/modules/comics';
import { getSearchValue } from '@/modules/search';

import './HomePage.scss';

export const HomePage: React.FC = () => {
  const searchValue = useAppSelector(getSearchValue);
  const characters = useAppSelector(getCharacters);
  const comics = useAppSelector(getComics);
  const filteredComics = useAppSelector(getComicsByParam('title', searchValue));

  const comicsSection =
    searchValue
      ? <HomeSection title={'Results'}>
        <ComicsList comics={filteredComics} />
      </HomeSection>
      : <HomeSection title={'Latest releases'}>
        <ComicsList comics={comics} />
      </HomeSection>;

  const slicedCharacters = characters.slice(0, 5);
  return (
    <div className='home'>
      <div className='home__hero'>
        <Hero comics={comics} />
      </div>
      {comicsSection}
      {/* <HomeSection> */}
      {/*  <Grid*/}
      {/*    spacing={'lg'}*/}
      {/*    alignItems={'flex-start'}*/}
      {/*    justifyContent={'flex-start'}*/}
      {/*    container>*/}
      {/*    {[1, 2, 3].map(element =>*/}
      {/*      <Grid key={element}*/}
      {/*            sm={2}*/}
      {/*            md={4}*/}
      {/*            lg={4} item>*/}
      {/*        <CalendarCard title={'February 2022'} variant={'red'} />*/}
      {/*      </Grid>,*/}
      {/*    )}*/}
      {/*  </Grid>*/}
      {/* </HomeSection> */}
      <HomeSection title={'Characters'}>
        <CharactersList characters={slicedCharacters} />
      </HomeSection>
    </div>
  );
};
