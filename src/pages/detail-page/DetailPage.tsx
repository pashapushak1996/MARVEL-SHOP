import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '@/app/hooks';

import { Container } from '@/components/layout';
import { Typography } from '@/components/shared';
import { ComicOverview, ComicsList, getComics } from '@/modules/comics';

import './DetailPage.scss';


export const DetailPage = () => {
  const { comicId = '' } = useParams();

  const comics = useAppSelector(getComics);

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
          <ComicsList comics={slicedComics} />
        </div>
      </div>
    </Container>
  );
};
