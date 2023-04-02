// @ts-nocheck
import React from 'react';
import { useAppSelector } from '../../app/hooks';

import { CalendarCard, Hero } from '../../components/ui';

import { Grid } from '../../components/layout';
import { HomeSection } from './home-section/HomeSection';

import { CharactersList, getCharacters } from '../../modules/characters';
import { ComicsList, getComics } from '../../modules/comics/';


import './HomePage.scss';

export const HomePage: React.FC = () => {
  const characters = useAppSelector(getCharacters);
  const comics = useAppSelector(getComics);

  const slicedComics = comics.slice(0, 8);
  const slicedCharacters = characters.slice(0, 5);

  return (
    <div className='home'>
      <div className='home__hero'>
        <Hero comics={comics} />
      </div>
      <HomeSection title={'Latest releases'}>
        <ComicsList comics={slicedComics} />
      </HomeSection>
      <HomeSection>
        <Grid
          spacing={'lg'}
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
          container>
          {[1, 2, 3].map(element =>
            <Grid key={element}
                  sm={2}
                  md={4}
                  lg={4} item>
              <CalendarCard title={'February 2022'} variant={'red'} />
            </Grid>,
          )}
        </Grid>
      </HomeSection>
      <HomeSection title={'Characters'}>
        <CharactersList characters={slicedCharacters} />
      </HomeSection>
    </div>
  );
};
