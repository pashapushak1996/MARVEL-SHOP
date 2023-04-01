import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacters } from './characters.thunk';
import { normalizeCharacter } from '../helpers/character.helper';
import { ICharacter, ICharacterResponse } from '../types/ICharacter';

type TypeLoadingState = 'idle' | 'pending' | 'succeeded' | 'failed';

interface ICharactersState {
  characters: Array<ICharacter>;
  loading: TypeLoadingState;
}

const initialState = {
  characters: [],
  loading: 'idle',
} as ICharactersState;

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = 'succeeded';

      const normalizedCharacters = action.payload.map((character: ICharacterResponse): ICharacter => normalizeCharacter(character));

      state.characters = normalizedCharacters;
    });
  },
});

export const charactersReducer = charactersSlice.reducer;