import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { getCharacters } from './store/characters.selector';
import { ICharacter } from '../../types';
import { Grid } from '../../components/layout';
import { CharacterCard } from '../../components/ui';

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