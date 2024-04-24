import { Pagination, Stack } from '@mui/material';

const MoviePagination = () => {
  return (
    <Stack my={7}>
      <Pagination
        // count={searchInput ? searchList?.total_pages : data?.total_pages}
        // onChange={handlePageChange}
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
  );
};

export default MoviePagination;
