import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { Grid } from '../../components/layout';

import { getCharacters } from './store';
import { ICharacter } from './types';
import { CharacterCard } from './components';

export const CharactersList = () => {
  const characters = useAppSelector(getCharacters);

  const characterCardElements =
    characters.map((character: ICharacter) =>
      <Grid key={character.id} item>
        <CharacterCard character={character} />
      </Grid>);

  return (
    <Grid spacing={'md'}
          alignItems={'center'}
          justifyContent={'space-between'}
          container>
      {characterCardElements}
    </Grid>
  );
};