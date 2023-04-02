// @ts-nocheck
import React from 'react';
import { IComic } from '../../types';

import { Grid } from '../../../components/layout';
import { ComicCard } from '../../../components/ui';

import './ComicsList.scss';

interface IComicsListProps {
  /** Comics array which will be rendered*/
  comics: Array<IComic>;
}

export const ComicsList: React.FC<IComicsListProps> = ({ comics }) => {
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