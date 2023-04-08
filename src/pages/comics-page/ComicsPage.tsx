import React from 'react';

import { ComicsList, useComics } from '@/modules/comics';
import { Container } from '@/components/layout';

import './ComicsPage.scss';
import { useLocation } from 'react-router-dom';
import { Loader, Typography } from '@/components/shared';

export const ComicsPage: React.FC = () => {
  const { state: searchValue } = useLocation();

  const { comics, loading } = useComics({ titleStartsWith: searchValue });

  if (loading !== 'succeeded') {
    return <Loader />;
  }

  return (
    <div className='comics-page'>
      {comics.length === 0 && <Typography variant='heading-md'>There are no results</Typography>}
      <Container>
        <ComicsList comics={comics} />
      </Container>
    </div>
  );
};
