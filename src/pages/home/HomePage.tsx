import React from 'react';

import { CalendarCard, CharacterCard, ComicCard, Header, Hero } from '../../components/ui';
import { Grid } from '../../components/layout';

import './HomePage.scss';

import modalImage from '../../assets/ModalImage.png';
import { charactersArray } from '../../examples';

import { IComic } from '../../types';
import { useAppSelector } from '../../hooks/rtk.hooks';

export const HomePage: React.FC = () => {
  const comics = useAppSelector((state) => state.comics.comics);

  return (
    <div className='home'>
      <Header />
      <Hero comics={comics.slice(0, 4)} />
      <div className='home__section'>
        <Grid
          spacing={'lg'}
          justifyContent={'flex-start'}
          container>
          {comics.map((comic: IComic) =>
            <Grid key={comic.id}
                  sm={6}
                  md={4}
                  lg={3} item>
              <ComicCard comic={comic} />
            </Grid>,
          )}
        </Grid>
      </div>
      <div className='home__section'>
        <Grid
          spacing={'lg'}
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
          container>
          {[1, 2, 3, 4, 5].map(element =>
            <Grid key={element}
                  sm={2}
                  md={4}
                  lg={4} item>
              <CalendarCard cover={modalImage} title={'February 2022'} variant={'red'} />
            </Grid>,
          )}
        </Grid>
      </div>
      <div className='home__section'>
        <Grid
          spacing={'md'}
          alignItems={'center'}
          justifyContent={'space-between'}
          container>
          {charactersArray.map((character, index) =>
            <Grid key={character.id + index}
                  item>
              <CharacterCard character={character} />
            </Grid>,
          )}
        </Grid>
      </div>
    </div>
  );
};
