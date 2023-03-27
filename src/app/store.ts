import { configureStore } from '@reduxjs/toolkit';

import comicsReducer from '../features/comics/comics.slice';
import { fetchComics } from '../features/comics/comics.thunk';

import characterReducer from '../features/characters/characters.slice';
import { fetchCharacters } from '../features/characters/characters.thunk';


export const store = configureStore({
  reducer: {
    comics: comicsReducer,
    characters: characterReducer,
  },
});

// Initializing store
store.dispatch(fetchComics());
store.dispatch(fetchCharacters());

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
