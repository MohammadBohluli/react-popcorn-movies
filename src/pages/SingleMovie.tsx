import { useParams } from 'react-router-dom';
import { useGetSingleMovieQuery } from '../feather/movies/movie-api-slice';

const SingleMovie = () => {
  const { movieId } = useParams();

  const { data } = useGetSingleMovieQuery(Number(movieId));

  return <div>{data?.title}</div>;
};

export default SingleMovie;
