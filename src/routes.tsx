import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Layout from './pages/Layout';
import SingleMovie from './pages/SingleMovie';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'movies/:movieId', element: <SingleMovie /> },
    ],
  },
]);

export default router;
