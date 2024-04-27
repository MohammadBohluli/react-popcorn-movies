import { Box, Grid } from '@mui/material';
import { useGetMovieListQuery } from '../feather/movies/movie-api-slice';
import CradMovie from '../components/CardMovie';
import CardSkleton from '../components/CardSkleton';
import ShowError from '../components/ShowError';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import PaginationMovie from '../components/PaginationMovie';

// const Home = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchInput = useAppSelector((state) => state.movie.searchInput);
//   const pageNumber = searchParams.get('page') ?? 1;

//   const {
//     data,
//     isLoading: movieListLoading,
//     isError,
//   } = useGetMovieListQuery(Number(pageNumber));

//   const { data: searchList } = useSearchMovieQuery({
//     searchQuery: searchInput,
//     page: Number(pageNumber),
//   });

//   const movies = data?.results ? data.results : [];
//   const skletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const handlePageChange = (
//     _event: React.ChangeEvent<unknown>,
//     page: number
//   ) => {
//     searchParams.set('page', page.toString());
//     setSearchParams(searchParams);
//   };

//   if (isError) return <ShowError />;

//   return (
//     <Box my={'20px'}>
//       <Grid container spacing={8} justifyContent={'center'}>
//         {/* loading skleton until load data */}
//         {movieListLoading &&
//           skletons.map((skleton) => (
//             <Grid item key={skleton}>
//               <CardSkleton key={skleton} />
//             </Grid>
//           ))}

//         {searchInput === ''
//           ? movies.map((moviItem) => (
//               <Grid item key={moviItem.id}>
//                 <CradMovie {...moviItem} />
//               </Grid>
//             ))
//           : searchList?.results.map((moviItem) => (
//               <Grid item key={moviItem.id}>
//                 <CradMovie {...moviItem} />
//               </Grid>
//             ))}
//       </Grid>
//       {/* Pagination ///////////////////////////////////////// */}
//       <Stack my={7}>
//         <Pagination
//           count={searchInput ? searchList?.total_pages : data?.total_pages}
//           onChange={handlePageChange}
//           page={Number(pageNumber)}
//           siblingCount={3}
//           size="large"
//           color="primary"
//           sx={{
//             '.MuiPagination-ul': {
//               justifyContent: 'center',
//             },
//           }}
//         />
//       </Stack>
//     </Box>
//   );
// };

// export default Home;
// ///////////////////////////////////////////////////////
const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = useAppSelector((state) => state.movie.sortBy);
  const selectedGenres = useAppSelector((state) => state.movie.selectedGenres);
  const voteValue = useAppSelector((state) => state.movie.voteValue);
  const fromDate = useAppSelector((state) => state.movie.fromDate);
  const toDate = useAppSelector((state) => state.movie.toDate);

  const pageNumber = searchParams.get('page') ?? 1;

  const {
    data,
    isLoading: movieListLoading,
    isError,
  } = useGetMovieListQuery({
    page: Number(pageNumber),
    sort_by: sortBy,
    selectedGenres: selectedGenres.join(','),
    voteValue: voteValue,
    fromDate: fromDate,
    toDate: toDate,
  });

  // const movies = data?.results || [];
  const movies = data?.results ? data.results : [];

  const skletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChangePage = (
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

        {movies.map((moviItem) => (
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

export default Home;
