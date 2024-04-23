import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from '../feather/movies/movie-api-slice';
import movieReducer from '../feather/movies/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(movieApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
