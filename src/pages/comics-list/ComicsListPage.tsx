// @ts-nocheck

// TODO but you have to solve it

import React from 'react';
import { Grid } from '../../components/layout';
import { ComicCard, Select, Typography } from '../../components/ui';
import { IComic } from '../../models';

import './ComicsListPage.scss';

interface IComicsListPageProps {
  comics: Array<IComic>;
}


export const ComicsListPage: React.FC<IComicsListPageProps> = ({ comics }) => {

  /* Todo create filter and sort functionality */


  const comicCardComponents = comics.map((comic: IComic) => <Grid key={comic.id} xs={6} md={3} lg={3} item>
    <ComicCard comic={comic} />
  </Grid>);

  return (
    <div className='comics-list'>
      <div className='comics-list__header'>
        <div className='comics-list__panel'>
          <Typography className='comics-list__panel-title'
                      variant='h4'
                      size={12}
                      weight={500}>Filter by</Typography>
          <div className='comics-list__grid'>
            <Select />
            <Select />
            <Select />
            <Select />
          </div>
        </div>
        <div className='comics-list__panel'>
          <Typography className='comics-list__panel-title'
                      variant='h4'
                      size={12}
                      weight={500}>Sort by</Typography>
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
