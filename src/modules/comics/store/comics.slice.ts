import { createSlice } from '@reduxjs/toolkit';

import { fetchComics } from './comics.thunk';
import { IComic, IComicsResponse } from '../../../types';
import { normalizeComic } from '../../../helpers';

type TypeLoadingState = 'idle' | 'pending' | 'succeeded' | 'failed';

interface IComicsState {
  comics: Array<IComic>;
  loading: TypeLoadingState;
}

const initialState = {
  comics: [],
  loading: 'idle',
} as IComicsState;

const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // It's when comics promise is fulfilled

    builder.addCase(
      fetchComics.fulfilled,
      (state: IComicsState, action) => {
        state.loading = 'succeeded';

        const normalizedComics = action.payload.map((comic: IComicsResponse): IComic => normalizeComic(comic));

        state.comics = normalizedComics;
      });

    // It's when comics promise is rejected

    builder.addCase(fetchComics.rejected,
      (state: IComicsState) => {
        state.loading = 'failed';
      });
  },
});

export default comicsSlice.reducer;
