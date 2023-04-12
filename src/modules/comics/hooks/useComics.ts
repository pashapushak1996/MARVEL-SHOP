import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { IComicsRequestParams } from '@/modules/comics/types';
import { fetchComics, getComics, getLoading } from '@/modules/comics/store';
import { setLoading } from '@/modules/comics/store/comics.slice';

export const useComics = (params?: IComicsRequestParams) => {
  const dispatch = useAppDispatch();
  const comics = useAppSelector(getComics);
  const loading = useAppSelector(getLoading);

  const searchValue = params?.titleStartsWith;

  useEffect(() => {
    dispatch(fetchComics(params));

    return () => {
      dispatch(setLoading('idle'));
    };
  }, [dispatch, searchValue]);

  return { comics, loading };
};