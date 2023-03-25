import React from 'react';

import { ComicDetail } from '../../components/ui/comics-detail';
import { IComic } from '../../types';
import { ActionBox } from '../../components/ui/action-box';

import './DetailPage.scss';

import { Grid } from '../../components/layout';
import { ComicCard } from '../../components/ui';
import { Typography } from '../../components/shared';

interface IDetailProps {
  comic: IComic;
  comics: Array<IComic>;
}

export const DetailPage: React.FC<IDetailProps> = ({ comic, comics }) => {
  console.log(comic);

  const comicCardComponents = comics.map((comic: IComic) => <Grid key={comic.id} xs={6} md={3} lg={3} item>
    <ComicCard comic={comic} />
  </Grid>);

  return (
    <div className='detail'>
      <div className='detail__panel'>
        <div className='detail__comic'>
          <ComicDetail {...comic} />
        </div>
        <div className='detail__action-box'>
          <ActionBox price={comic.price} isOnSale={comic.price !== 0} />
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
  );
};
