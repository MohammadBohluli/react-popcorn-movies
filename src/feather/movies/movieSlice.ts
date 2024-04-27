import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieState } from '../../entities/entities';

const initialState: MovieState = {
  searchInput: '',
  sortBy: '',
  selectedGenres: [],
  voteValue: 0,
  fromDate: '',
  toDate: '',
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
    addVoteValue: (state, action: PayloadAction<number>) => {
      state.voteValue = action.payload;
    },
    addFromDate: (state, action: PayloadAction<string>) => {
      state.fromDate = action.payload;
    },
    addToDate: (state, action: PayloadAction<string>) => {
      state.toDate = action.payload;
    },
  },
});

export const {
  setSearchInput,
  setSortBy,
  addSelectedGenre,
  removeSelectedGenre,
  addVoteValue,
  addFromDate,
  addToDate,
} = movieSlice.actions;
export default movieSlice.reducer;
