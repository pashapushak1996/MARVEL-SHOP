import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllComics, getComicById } from '../../api/marvelApi/marvel.api.js';
import { IComicsResponse } from '../../types';

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
