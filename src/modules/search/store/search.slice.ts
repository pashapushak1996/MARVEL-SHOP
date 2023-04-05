import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchSliceState {
  searchValue: string;
}

const initialState: ISearchSliceState = {
  searchValue: '',
};


const searchSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
