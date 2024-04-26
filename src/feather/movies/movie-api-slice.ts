import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTIwMjYxNjZhMzllN2UwZGVlN2I4MmYyMzM5MjFmZSIsInN1YiI6IjY2MWMwMjhkMzIzZWJhMDE3Yzc2MmUzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qjXfCOpqKvfqkKngzT72OUjT64cQ-KY8Y2W6m5ddaMc';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

interface Genre {
  id: number;
  name: string;
}

interface GenreList {
  genres: Genre[];
}

interface FetchMoviesResponse<T> {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}
interface SearchQueryArgument {
  searchQuery: string;
  page: number;
}

interface FilterQueryArgument {
  page?: number;
  sort_by?: 'popularity.desc';
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    headers: { Authorization: `Bearer ${TOKEN}` },
  }),
  endpoints(builder) {
    return {
      getMovieList: builder.query<
        FetchMoviesResponse<Movie>,
        FilterQueryArgument
      >({
        query(args) {
          const { page = 1, sort_by = 'popularity.desc' } = args;
          return `discover/movie?page=${page}&sort_by=${sort_by}`;
        },
      }),
      getSingleMovie: builder.query<Movie, number | void>({
        query(movieId) {
          return `movie/${movieId}`;
        },
      }),
      searchMovie: builder.query<
        FetchMoviesResponse<Movie>,
        SearchQueryArgument
      >({
        query({ searchQuery = '', page = 1 }) {
          return `search/movie?query=${searchQuery}&page=${page}`;
        },
      }),
      getGenreList: builder.query<GenreList, void>({
        query() {
          return `genre/movie/list`;
        },
      }),
    };
  },
});

export const {
  useGetMovieListQuery,
  useGetSingleMovieQuery,
  useSearchMovieQuery,
  useGetGenreListQuery,
} = movieApi;
