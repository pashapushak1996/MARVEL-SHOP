import React, { useEffect } from 'react';

import { ComicDetail } from '../../components/ui/comics-detail';
import { IComic } from '../../types';
import { ActionBox } from '../../components/ui/action-box';

import './DetailPage.scss';

import { Container, Grid } from '../../components/layout';
import { ComicCard } from '../../components/ui';
import { Typography } from '../../components/shared';
import { useAppDispatch, useAppSelector } from '../../hooks/rtk.hooks';
import { fetchComics } from '../../features/comics/comics.thunk';

export const DetailPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const comics = useAppSelector((state) => state.comics.comics);
  const loading = useAppSelector((state) => state.comics.loading);

  useEffect(() => {
    dispatch(fetchComics());
  }, [dispatch]);

  const comicCardComponents = comics.map((comic: IComic) => <Grid key={comic.id} xs={6} md={3} lg={3} item>
    <ComicCard comic={comic} />
  </Grid>);

  if (loading === 'idle') {
    return <div>Wait</div>;
  }

  return (
    <Container>
      <div className='detail'>
        <div className='detail__panel'>
          <div className='detail__comic'>
            <ComicDetail {...comics[0]} />
          </div>
          <div className='detail__action-box'>
            <ActionBox price={comics[0].price} isOnSale={comics[0].price !== 0} />
          </div>
        </div>
        <div className='detail__grid'>
          <div className='detail__subtitle'>
            <Typography as={'h3'} variant={'heading-lg'}>More Comics</Typography>
          </div>
          <Grid spacing={'md'}
                justifyContent={'flex-start'}
                container>
            {comicCardComponents}
          </Grid>
        </div>
      </div>
    </Container>
  );
};
