import React from 'react';

import { Grid } from '../../components/layout';
import { ICharacter } from './types';
import { CharacterCard } from './components';

interface ICharactersListProps {
  /** Array of characters */
  characters: Array<ICharacter>;
}

export const CharactersList: React.FC<ICharactersListProps> = ({ characters }) => {
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