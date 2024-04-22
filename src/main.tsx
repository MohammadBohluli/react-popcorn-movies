import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import MovieList from './pages/MovieList.tsx';
import SingleMovie from './pages/SingleMovie.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: 'movies', element: <MovieList /> },
      { path: 'movies/:movieId', element: <SingleMovie /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
