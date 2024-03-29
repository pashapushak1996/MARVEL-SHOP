import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Container } from '@/components/layout';
import { Loader, Typography } from '@/components/shared';
import { queryStringToObject } from '@/helpers';

import { ComicsList, useComics } from '@/modules/comics';

import './ComicsPage.scss';

export const ComicsPage: React.FC = () => {
  const { search } = useLocation();

  const params = queryStringToObject(search);

  const { comics, loading } = useComics(params);

  return (
    <div className='comics-page'>
      {comics.length === 0 && <Typography variant='heading-md'>There are no results</Typography>}
      <Container>
        <ComicsList comics={comics} loading={loading !== 'succeeded'} />
      </Container>
    </div>
  );
};
