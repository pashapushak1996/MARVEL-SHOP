import { createSlice } from '@reduxjs/toolkit';

import { fetchComicById, fetchComics } from './comics.thunk';
import { normalizeComic } from '../../../helpers';
import { IComic, IComicsResponse } from '../types/IComics';

type TypeLoadingState = 'idle' | 'pending' | 'succeeded' | 'failed';

interface IComicsState {
  comics: Array<IComic>;
  comic: IComic | null;
  loading: TypeLoadingState;
}

const initialState = {
  comics: [],
  comic: null,
  loading: 'idle',
} as IComicsState;

const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Comics list

    builder.addCase(
      fetchComics.fulfilled,
      (state: IComicsState, action) => {
        state.loading = 'succeeded';

        const normalizedComics = action.payload.map((comic: IComicsResponse): IComic => normalizeComic(comic));

        state.comics = normalizedComics;
      });

    // Single comic

    builder.addCase(fetchComicById.fulfilled,
      (state: IComicsState, action) => {
        state.loading = 'succeeded';

        const comicFromServer = action.payload[0];

        const normalizedComic = normalizeComic(comicFromServer);

        state.comic = normalizedComic;
      });
  },
});

export const comicsReducer = comicsSlice.reducer;
