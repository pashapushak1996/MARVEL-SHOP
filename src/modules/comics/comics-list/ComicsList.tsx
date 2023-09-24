import React from 'react';

import { Grid } from '@/components/layout';

import { ComicCard } from '../components/comics-card';
import { IComic } from '../types';
import { ComicCardLoader } from '@/modules/comics/components/comics-card/ComicCardLoader';

interface IComicsListProps {
  /** Comics array which will be rendered*/
  comics: Array<IComic>;

  loading: boolean;
}

export const ComicsList: React.FC<IComicsListProps> = ({ comics, loading }) => {
  const comicCardSkeletons = Array(12)
    .fill(1)
    .map((_, index) =>
      <Grid key={index} xs={6} md={3} lg={3} xlg={2} item>
        <ComicCardLoader />
      </Grid>);

  const comicCardComponents =
    comics.map((comic: IComic) =>
      <Grid key={comic.id} xs={6} md={3} lg={3} xlg={2} item>
        <ComicCard comic={comic} />
      </Grid>);

  return (
    <Grid spacing={'md'}
          justifyContent={'flex-start'}
          container>
      {loading ? comicCardSkeletons : comicCardComponents}
    </Grid>
  );
};