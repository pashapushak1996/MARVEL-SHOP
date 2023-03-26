import { configureStore } from '@reduxjs/toolkit'

import comicsReducer from '../features/comics/comics.slice'
import characterReducer from '../features/characters/characters.slice'


export const store = configureStore({
  reducer: {
    comics: comicsReducer,
    characters: characterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
