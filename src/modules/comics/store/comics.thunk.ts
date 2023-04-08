import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllComics, getComicById } from '../api';
import { IComicsResponse } from '../types';
import { IComicsRequestParams } from '@/modules/comics/types/IComicsRequestParams';

export const fetchComics = createAsyncThunk(
  'comics/fetchComics',
  async (params?: IComicsRequestParams) => {
    const comics: Array<IComicsResponse> = await getAllComics(params);
    return comics;
  },
);


export const fetchComicById = createAsyncThunk('comics/fetchComicById',
  async (comicId: string) => {
    const comic: Array<IComicsResponse> = await getComicById(comicId);

    return comic;
  });
