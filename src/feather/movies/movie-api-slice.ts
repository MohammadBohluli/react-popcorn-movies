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

interface FetchMoviesResponse<T> {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    headers: { Authorization: `Bearer ${TOKEN}` },
  }),
  endpoints(builder) {
    return {
      getMovieList: builder.query<FetchMoviesResponse<Movie>, number | void>({
        query(page = 1) {
          return `movie/popular?page=${page}`;
        },
      }),
      getMovieDetails: builder.query<Movie, number | void>({
        query(movieId) {
          return `movie/${movieId}`;
        },
      }),
    };
  },
});

export const { useGetMovieListQuery, useGetMovieDetailsQuery } = movieApi;
