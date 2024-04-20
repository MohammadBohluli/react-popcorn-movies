import CradMovie from './components/CradMovie';
import Navbar from './components/Navbar';
import {
  useGetMovieDetailsQuery,
  useGetMovieListQuery,
} from './feather/movies/movie-api-slice';

const App = () => {
  const { data, isLoading } = useGetMovieListQuery(1);
  // const { data: movie } = useGetMovieDetailsQuery(823464);

  const movies = data?.results ? data.results : [];

  if (isLoading) {
    return <p>درحال بارگیری...</p>;
  }

  return (
    <div>
      <Navbar />
      <CradMovie />
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.id}</li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default App;
