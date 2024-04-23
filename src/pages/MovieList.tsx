import { Box, Grid, Pagination, Stack } from '@mui/material';
import {
  useGetMovieListQuery,
  useSearchMovieQuery,
} from '../feather/movies/movie-api-slice';
import CradMovie from '../components/CardMovie';
import CardSkleton from '../components/CardSkleton';
import ShowError from '../components/ShowError';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const MovieList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInput = useAppSelector((state) => state.movie.searchInput);

  const pageNumber = searchParams.get('page') ?? 1;
  const {
    data,
    isLoading: movieListLoading,
    isError,
  } = useGetMovieListQuery(Number(pageNumber));

  const { data: searchList, isLoading: searchLoading } =
    useSearchMovieQuery(searchInput);

  const movies = data?.results ? data.results : [];
  const skletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  if (isError) return <ShowError />;

  return (
    <Box my={'20px'}>
      <Grid container spacing={8} justifyContent={'center'}>
        {/* loading skleton until load data */}
        {movieListLoading &&
          skletons.map((skleton) => (
            <Grid item key={skleton}>
              <CardSkleton key={skleton} />
            </Grid>
          ))}

        {searchInput === ''
          ? movies.map((moviItem) => (
              <Grid item key={moviItem.id}>
                <CradMovie {...moviItem} />
              </Grid>
            ))
          : searchList?.results.map((moviItem) => (
              <Grid item key={moviItem.id}>
                <CradMovie {...moviItem} />
              </Grid>
            ))}
      </Grid>
      {/* Pagination ///////////////////////////////////////// */}
      <Stack my={7}>
        <Pagination
          count={data?.total_pages}
          onChange={handlePageChange}
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
