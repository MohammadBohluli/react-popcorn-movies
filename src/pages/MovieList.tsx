import { Box, Grid, Pagination, Stack } from '@mui/material';
import { useGetMovieListQuery } from '../feather/movies/movie-api-slice';
import CradMovie from '../components/CardMovie';
import CardSkleton from '../components/CardSkleton';
import { useState } from 'react';
import ShowError from '../components/ShowError';

const MovieList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = useGetMovieListQuery(page);

  const movies = data?.results ? data.results : [];
  const skletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (isError) return <ShowError />;

  return (
    <Box my={'20px'}>
      <Grid container spacing={8} justifyContent={'center'}>
        {/* loading skleton until load data */}
        {isLoading &&
          skletons.map((skleton) => (
            <Grid item key={skleton}>
              <CardSkleton key={skleton} />
            </Grid>
          ))}

        {movies.map((moviItem) => (
          <Grid item key={moviItem.id}>
            <CradMovie {...moviItem} />
          </Grid>
        ))}
      </Grid>
      {/* Pagination ///////////////////////////////////////// */}
      <Stack my={7}>
        <Pagination
          count={data?.total_pages}
          onChange={(_, page) => setPage(page)}
          siblingCount={3}
          size="large"
          color="primary"
          sx={{
            '.MuiPagination-ul': {
              justifyContent: 'center',
            },
          }}
        />
      </Stack>
    </Box>
  );
};

export default MovieList;
