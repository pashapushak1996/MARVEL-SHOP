import React, { useEffect } from 'react';
import { Container, Grid } from '../../components/layout';
import { CharacterCard } from '../../components/ui';

import './CharactersListPage.scss';
import { ICharacter } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/rtk.hooks';
import { getCharacters } from '../../features/characters/characters.selector';
import { fetchAllCharacters } from '../../features/characters/characters.thunk';

export const CharactersListPage = () => {
  const dispatch = useAppDispatch();

  const characters = useAppSelector(getCharacters);

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);


  const characterCardElements =
    characters.map((character: ICharacter) =>
      <Grid key={character.id} item>
        <CharacterCard character={character} />
      </Grid>);

  return (
    <Container>
      <div className='characters-list'>
        <Grid spacing={'md'}
              alignItems={'center'}
              justifyContent={'space-between'}
              container>
          {characterCardElements}
        </Grid>
      </div>
    </Container>
  );
};
