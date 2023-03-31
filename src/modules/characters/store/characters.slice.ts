import { createSlice } from '@reduxjs/toolkit';
import { ICharacter, ICharacterResponse } from '../../../types';
import { fetchCharacters } from './characters.thunk';
import { normalizeCharacter } from '../helpers/character.helper';

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

export default charactersSlice.reducer;