import React from 'react';
import { Container } from '../../components/layout';
import { Typography } from '../../components/shared';

import './DetailPage.scss';
import { redirect, useParams } from 'react-router-dom';
import { ComicOverview, ComicsList, getComics } from '../../modules/comics';
import { useSelector } from 'react-redux';


export const DetailPage = () => {
  const { comicId } = useParams();

  const comics = useSelector(getComics);

  const slicedComics = comics.slice(0, 4);

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
          <ComicsList comics={slicedComics} />
        </div>
      </div>
    </Container>
  );
};
