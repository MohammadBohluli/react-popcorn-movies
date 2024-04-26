import { useGetGenreListQuery } from '../feather/movies/movie-api-slice';

const GenreSelector = () => {
  const { data } = useGetGenreListQuery();
  return <div></div>;
};

export default GenreSelector;
