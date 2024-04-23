import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MovieState {
  searchInput: string;
}

const initialState: MovieState = {
  searchInput: '',
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchInput } = movieSlice.actions;
export default movieSlice.reducer;
