import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  FetchMoviesResponse,
  FilterQueryArgument,
  GenreList,
  Movie,
  SearchQueryArgument,
} from '../../entities/entities';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTIwMjYxNjZhMzllN2UwZGVlN2I4MmYyMzM5MjFmZSIsInN1YiI6IjY2MWMwMjhkMzIzZWJhMDE3Yzc2MmUzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qjXfCOpqKvfqkKngzT72OUjT64cQ-KY8Y2W6m5ddaMc';

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
          const {
            page = 1,
            sort_by = 'popularity.desc',
            selectedGenres = 28,
            voteValue = 5,
            toDate = '',
            fromDate = '',
          } = args;
          return `discover/movie?page=${page}&sort_by=${sort_by}&with_genres=${selectedGenres}&vote_average.gte=${voteValue}&release_date.gte=${fromDate}&release_date.lte=${toDate}`;
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
