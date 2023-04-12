import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from '@/components/layout';
import { Loader, Typography } from '@/components/shared';

import { ComicsList, useComics } from '@/modules/comics';

import './ComicsPage.scss';
import { queryStringToObject } from '@/helpers';

export const ComicsPage: React.FC = () => {
  const { search } = useLocation();

  const params = queryStringToObject(search);

  const { comics, loading } = useComics(params);

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
