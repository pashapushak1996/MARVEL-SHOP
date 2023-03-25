import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './rtk.hooks';
import { fetchComics } from '../features/comics/comics.thunk';

export const useComics = () => {
  const dispatch = useAppDispatch();
  const comics = useAppSelector((state) => state.comics.comics);
  const loading = useAppSelector((state) => state.comics.loading);

  useEffect(() => {
    dispatch(fetchComics());
  }, [dispatch]);

  return { comics, loading };
};
