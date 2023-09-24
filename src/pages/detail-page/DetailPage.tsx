import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/hooks';

import { Container } from '@/components/layout';
import { Typography } from '@/components/shared';
import { ComicOverview, ComicsList, getComics } from '@/modules/comics';

import './DetailPage.scss';
import { fetchComics } from '@/modules/comics/store';


export const DetailPage = () => {
  const { comicId = '' } = useParams();
  const dispatch = useAppDispatch();

  const comics = useAppSelector(getComics);

  if (!comics.length){
    dispatch(fetchComics());
  }

  const slicedComics = comics.slice(0, 4);

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
          <ComicsList comics={slicedComics} loading={!slicedComics.length} />
        </div>
      </div>
    </Container>
  );
};
