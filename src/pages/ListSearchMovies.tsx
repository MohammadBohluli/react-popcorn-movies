import { Box, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useSearchMovieQuery } from '../feather/movies/movie-api-slice';
import CardSkleton from '../components/CardSkleton';
import CradMovie from '../components/CardMovie';
import PaginationMovie from '../components/PaginationMovie';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setSearchInput } from '../feather/movies/movieSlice';

const ListSearchMovies = () => {
  const searchInput = useAppSelector((state) => state.movie.searchInput);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') ?? 1;

  const { data, isLoading } = useSearchMovieQuery({
    page: Number(pageNumber),
    searchQuery: searchInput,
  });
  const skletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  useEffect(() => {
    dispatch(setSearchInput(searchParams.get('query') || ''));
  }, [dispatch, searchParams]);

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

        {data?.results.map((moviItem) => (
          <Grid item key={moviItem.id}>
            <CradMovie {...moviItem} />
          </Grid>
        ))}
      </Grid>

      <PaginationMovie
        count={data?.total_pages}
        pageNumber={Number(pageNumber)}
        onChangePage={handleChangePage}
      />
    </Box>
  );
};

export default ListSearchMovies;
