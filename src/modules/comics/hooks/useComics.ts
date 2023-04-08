import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { IComicsRequestParams } from '@/modules/comics/types';
import { fetchComics, getComics } from '@/modules/comics/store';

export const useComics = (params?: IComicsRequestParams) => {
  const dispatch = useAppDispatch();
  const comics = useAppSelector(getComics);


  useEffect(() => {
    dispatch(fetchComics(params));
  }, [dispatch, params?.titleStartsWith]);

  return { comics };
};