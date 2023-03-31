import React from 'react';

import './ComicsPage.scss';
import { ComicsList } from '../../modules/comics';
import { Container } from '../../components/layout';

export const ComicsPage: React.FC = () => {
  return (
    <div className='comics-page'>
      <Container>
        <ComicsList />
      </Container>
    </div>
  );
};
