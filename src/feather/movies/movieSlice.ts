import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MovieState {
  searchInput: string;
  sortBy: string;
}

const initialState: MovieState = {
  searchInput: '',
  sortBy: '',
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearchInput, setSortBy } = movieSlice.actions;
export default movieSlice.reducer;
