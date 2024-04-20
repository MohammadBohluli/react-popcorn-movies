import { Box, Grid } from '@mui/material';

import { useGetMovieListQuery } from '../feather/movies/movie-api-slice';
import CradMovie from './CardMovie';

const CardList = () => {
  const { data } = useGetMovieListQuery();
  const movies = data?.results ? data.results : [];
  return (
    <Box my={'20px'}>
      <Grid container spacing={8} justifyContent={'center'}>
        {movies.map((moviItem) => (
          <Grid item key={moviItem.id}>
            <CradMovie {...moviItem} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardList;
