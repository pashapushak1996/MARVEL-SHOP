import React, { useEffect } from 'react';
import { ComicDetail } from '../../../components/ui/comics-detail';
import { ActionBox } from '../../../components/ui/action-box';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getComic } from '../store/comics.selector';
import { Loader } from '../../../components/shared';
import { fetchComicById } from '../store/comics.thunk';

import './ComicOverview.scss';

interface IComicOverviewProps {
  /** It's id of comic*/
  comicId: string;
}

export const ComicOverview: React.FC<IComicOverviewProps> = ({ comicId }) => {
  const dispatch = useAppDispatch();
  const comic = useAppSelector(getComic);

  useEffect(() => {
    dispatch(fetchComicById(comicId));
  }, [comicId]);

  if (!comic) {
    return <Loader />;
  }

  return (
    <div className='comic-overview'>
      <div className='comic-overview__detail'>
        <ComicDetail {...comic} />
      </div>
      <div className='comic-overview__actions'>
        <ActionBox price={comic.price} isOnSale={comic.price !== 0} />
      </div>
    </div>
  );
};