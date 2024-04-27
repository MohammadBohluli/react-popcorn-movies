/////////////////////////////
// API
/////////////////////////////
export interface FetchMoviesResponse<T> {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}

/////////////////////////////
// Movies
/////////////////////////////
export interface MovieState {
  searchInput: string;
  sortBy: string;
  selectedGenres: number[];
  voteValue: number;
  fromDate: string;
  toDate: string;
}

export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

/////////////////////////////
// Genres
/////////////////////////////
export interface Genre {
  id: number;
  name: string;
}

export interface GenreList {
  genres: Genre[];
}

/////////////////////////////
// Filtering
/////////////////////////////
export interface SearchQueryArgument {
  searchQuery: string;
  page: number;
}

export interface FilterQueryArgument {
  page?: number;
  sort_by?: string;
  selectedGenres?: string;
  voteValue?: number;
  fromDate?: string;
  toDate?: string;
}
