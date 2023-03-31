// @ts-nocheck
import React from 'react';
import { useAppSelector } from '../../../app/hooks';

import { getComics } from '../store/comics.selector';
import { IComic } from '../../types';

import { Grid } from '../../../components/layout';
import { ComicCard } from '../../../components/ui';
import { Select, Typography } from '../../../components/shared';

import './ComicsList.scss';

export const ComicsList = () => {
  const comics = useAppSelector(getComics);

  const comicCardComponents =
    comics.map((comic: IComic) =>
      <Grid key={comic.id} xs={6} md={3} lg={3} item>
        <ComicCard comic={comic} />
      </Grid>);

  return (
    <div className='comics-list'>
      <div className='comics-list__header'>
        <div className='comics-list__panel'>
          <div className='comics-list__panel-title'>
            <Typography as='h4' variant='body-sm' weight='semi-bold'>Filter by</Typography>
          </div>
          <div className='comics-list__grid'>
            <Select />
            <Select />
            <Select />
            <Select />
          </div>
        </div>
        <div className='comics-list__panel'>
          <div className='comics-list__panel-title'>
            <Typography as='h4' variant='body-sm' weight='semi-bold'>Sort by</Typography>
          </div>
          <div className='comics-list__grid'>
            <Select />
          </div>
        </div>
      </div>
      <Grid spacing={'md'}
            justifyContent={'flex-start'}
            container>
        {comicCardComponents}
      </Grid>
    </div>
  );
};