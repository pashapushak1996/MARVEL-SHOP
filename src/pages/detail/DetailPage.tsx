import React from 'react';

import { ComicDetail } from '../../components/ui/comics-detail';
import { IComic } from '../../types';
import { ActionBox } from '../../components/ui/action-box';
import { Container, Grid } from '../../components/layout';
import { ComicCard } from '../../components/ui';
import { Loader, Typography } from '../../components/shared';

import './DetailPage.scss';
import { useAppSelector } from '../../hooks/rtk.hooks';
import { getComics } from '../../features/comics/comics.selector';


export const DetailPage: React.FC = () => {
  const comics = useAppSelector(getComics);

  const comicCardComponents = comics.map((comic: IComic) => <Grid key={comic.id} xs={6} md={3} lg={3} item>
    <ComicCard comic={comic} />
  </Grid>);

  if (comics.length === 0) {
    return <Loader />;
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
