import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCharacters } from '../api/characters.api';
import { ICharacterResponse } from '@/modules/characters/types';


export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (thunkAPI) => {
    const characters: Array<ICharacterResponse> = await getAllCharacters();

    return characters;
  },
);