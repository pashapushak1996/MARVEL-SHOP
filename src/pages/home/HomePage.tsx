import React from 'react';

import { CalendarCard, CharacterCard, ComicCard, Hero } from '../../components/ui';
import { Grid } from '../../components/layout';

import { IComic } from '../../types';
import { HomeSection } from './home-section/HomeSection';

import { getCharacters } from '../../modules/characters/store/characters.selector';
import { getComics } from '../../features/comics/comics.selector';
import { useAppSelector } from '../../app/hooks';

import './HomePage.scss';

export const HomePage: React.FC = () => {
  const characters = useAppSelector(getCharacters);
  const comics = useAppSelector(getComics);

  return (
    <div className='home'>
      <div className='home__hero'>
        <Hero comics={comics} />
      </div>
      <HomeSection title={'Latest releases'}>
        <Grid
          spacing={'lg'}
          justifyContent={'flex-start'}
          container>
          {comics.slice(0, 4).map((comic: IComic) =>
            <Grid key={comic.id}
                  sm={6}
                  md={4}
                  lg={3} item>
              <ComicCard comic={comic} />
            </Grid>,
          )}
        </Grid>
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
        <Grid
          spacing={'md'}
          alignItems={'center'}
          justifyContent={'space-between'}
          container>
          {characters.map((character, index) =>
            <Grid key={character.id + index}
                  item>
              <CharacterCard character={character} />
            </Grid>,
          )}
        </Grid>
      </HomeSection>
    </div>
  );
};
