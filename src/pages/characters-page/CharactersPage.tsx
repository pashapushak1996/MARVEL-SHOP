import React from 'react';

import './CharactersPage.scss';
import { CharactersList, getCharacters } from '@/modules/characters';
import { Container } from '@/components/layout';
import { useAppSelector } from '@/app/hooks';

export const CharactersPage = () => {
  const characters = useAppSelector(getCharacters);

  return (
    <div className='characters-page'>
      <Container>
        <CharactersList characters={characters} />
      </Container>
    </div>
  );
};
