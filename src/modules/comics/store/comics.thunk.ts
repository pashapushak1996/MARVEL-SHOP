import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllComics, getComicById } from '../api/comics.api';
import { IComicsResponse } from '../types/IComics';

export const fetchComics = createAsyncThunk(
  'comics/fetchComics',
  async (thunkAPI) => {
    const comics: Array<IComicsResponse> = await getAllComics();

    return comics;
  },
);


export const fetchComicById = createAsyncThunk('comics/fetchComicById',
  async (comicId: string, thunkAPI) => {
    const comic: Array<IComicsResponse> = await getComicById(comicId);

    return comic;
  });
