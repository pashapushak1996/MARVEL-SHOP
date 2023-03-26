import React, { useEffect, useState } from 'react';
import { Container, Grid } from '../../components/layout';
import { CharacterCard } from '../../components/ui';
import { getAllCharacters } from '../../api/marvelApi/marvel.api';
import { normalizeCharacter } from '../../helpers/character.helper';

import './CharactersListPage.scss';
import { ICharacter, ICharacterResponse } from '../../types';

export const CharactersListPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async function() {
        const charactersResponse = await getAllCharacters();

        setCharacters(charactersResponse);
      }()
    );

  }, []);

  const characterCardElements =
    characters.map((character: ICharacterResponse) =>
      <Grid key={character.id} item>
        <CharacterCard character={normalizeCharacter(character)} />
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
