import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MovieState {
  searchInput: string;
  sortBy: string;
  selectedGenres: number[];
}

const initialState: MovieState = {
  searchInput: '',
  sortBy: '',
  selectedGenres: [],
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
    addSelectedGenre: (state, action: PayloadAction<number>) => {
      if (state.selectedGenres.includes(action.payload)) return;
      state.selectedGenres.push(action.payload);
    },
    removeSelectedGenre: (state, action: PayloadAction<number>) => {
      const index = state.selectedGenres.findIndex(
        (genreId) => genreId === action.payload
      );
      state.selectedGenres.splice(index, 1);
    },
  },
});

export const {
  setSearchInput,
  setSortBy,
  addSelectedGenre,
  removeSelectedGenre,
} = movieSlice.actions;
export default movieSlice.reducer;
