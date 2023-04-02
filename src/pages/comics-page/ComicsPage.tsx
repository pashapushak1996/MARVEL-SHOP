import React from 'react';
import { useSelector } from 'react-redux';

import { ComicsList, getComics } from '../../modules/comics';
import { Container } from '../../components/layout';

import './ComicsPage.scss';

export const ComicsPage: React.FC = () => {
  const comics = useSelector(getComics);

  return (
    <div className='comics-page'>
      <Container>
        <ComicsList comics={comics} />
      </Container>
    </div>
  );
};
