import React, { useEffect } from 'react';

import { CalendarCard, CharacterCard, ComicCard, Header, Hero } from '../../components/ui';
import { Container, Grid } from '../../components/layout';

import './HomePage.scss';

import modalImage from '../../assets/ModalImage.png';
import { charactersArray } from '../../examples';

import { IComic } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/rtk.hooks';
import { fetchComics } from '../../features/comics/comics.thunk';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const comics = useAppSelector((state) => state.comics.comics);
  const loading = useAppSelector((state) => state.comics.loading);

  useEffect(() => {
    dispatch(fetchComics());
  }, [dispatch]);


  return (
    <div className='home'>
      <Hero comics={comics} />
      <Container>
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
      </Container>
    </div>
  );
};
