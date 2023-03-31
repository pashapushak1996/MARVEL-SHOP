import { createAsyncThunk } from '@reduxjs/toolkit';

import { IComicsResponse } from '../../../types';
import { getAllComics, getComicById } from '../api/comics.api';

export const fetchComics = createAsyncThunk(
  'comics/fetchComics',
  async (thunkAPI) => {
    const comics: Array<IComicsResponse> = await getAllComics();

    return comics;
  },
);


export const fetchComicById = createAsyncThunk('comics/fetchComicById',
  async (comicId: number, thunkAPI) => {
    const comic: IComicsResponse = await getComicById(comicId);

    return comic;
  });
