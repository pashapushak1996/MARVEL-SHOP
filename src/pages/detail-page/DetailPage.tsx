import React from 'react';
import { Container } from '../../components/layout';
import { Typography } from '../../components/shared';

import './DetailPage.scss';
import { redirect, useParams } from 'react-router-dom';
import { ComicOverview } from '../../modules/comics/comic-overview/ComicOverview';
import { ComicsList } from '../../modules/comics';


export const DetailPage = () => {
  const { comicId } = useParams();

  if (!comicId) {
    return redirect('/comics');
  }

  return (
    <Container>
      <div className='detail-page'>
        <div className='detail-page__overview'>
          <ComicOverview comicId={comicId} />
        </div>
        <div className='detail-page__subtitle'>
          <Typography as={'h3'} variant={'heading-lg'}>More Comics</Typography>
        </div>
        <div className='detail-page__comics-list'>
          <ComicsList />
        </div>
      </div>
    </Container>
  );
};
