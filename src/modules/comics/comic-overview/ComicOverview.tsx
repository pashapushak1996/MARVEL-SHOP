import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { ComicDetail } from '../components/comics-detail';
import { ActionBox } from '@/components/shared/action-box';

import { fetchComicById, getComic } from '../store';

import './ComicOverview.scss';
import { cartActions } from '@/modules/cart';
import { ComicDetailLoader } from '@/modules/comics/components/comics-detail/ComicDetailLoader';

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

  const onClickAddToCart = () => {
    dispatch(cartActions.addToCart(comic));
  };


  if (!comic || comic.id.toString() !== comicId) {
    return <ComicDetailLoader />;
  }

  return (
    <div className='comic-overview'>
      <div className='comic-overview__detail'>
        <ComicDetail {...comic} />
      </div>
      <div className='comic-overview__actions'>
        <ActionBox price={comic.price}
                   isOnSale={comic.price !== 0}
                   onClickAddToCart={() => onClickAddToCart()} />
      </div>
    </div>
  );
};