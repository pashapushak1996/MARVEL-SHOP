import React from 'react';
import { Container, Grid } from '../../components/layout';
import { CharacterCard } from '../../components/ui';

import { ICharacter } from '../../types';
import { useAppSelector } from '../../hooks/rtk.hooks';
import { getCharacters } from '../../features/characters/characters.selector';

import './CharactersListPage.scss';

export const CharactersListPage = () => {
  const characters = useAppSelector(getCharacters);

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
