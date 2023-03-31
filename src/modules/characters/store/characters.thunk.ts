import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICharacterResponse } from '../../../types';
import { getAllCharacters } from '../api/characters.api';


export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (thunkAPI) => {
    const characters: Array<ICharacterResponse> = await getAllCharacters();

    return characters;
  },
);