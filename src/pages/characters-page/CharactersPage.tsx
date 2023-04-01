import React from 'react';

import './CharactersPage.scss';
import { CharactersList } from '../../modules/characters';
import { Container } from '../../components/layout';

export const CharactersPage = () => {
  return (
    <div className='characters-page'>
      <Container>
        <CharactersList />
      </Container>
    </div>
  );
};
