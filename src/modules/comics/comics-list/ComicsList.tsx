// @ts-nocheck
import React from 'react';
import { useAppSelector } from '../../../app/hooks';

import { getComics } from '../store/comics.selector';
import { IComic } from '../../types';

import { Grid } from '../../../components/layout';
import { ComicCard } from '../../../components/ui';

import './ComicsList.scss';

export const ComicsList = () => {
  const comics = useAppSelector(getComics);

  const comicCardComponents =
    comics.map((comic: IComic) =>
      <Grid key={comic.id} xs={6} md={3} lg={3} item>
        <ComicCard comic={comic} />
      </Grid>);

  return (
      <Grid spacing={'md'}
            justifyContent={'flex-start'}
            container>
        {comicCardComponents}
      </Grid>
  );
};