import { Pagination, Stack } from '@mui/material';

import React from 'react';

interface Props {
  // TODO: correct undefined problem
  count: number | undefined;
  pageNumber: number;
  onChangePage: (
    event: React.ChangeEvent<unknown>,
    currentPage: number
  ) => void;
}
const PaginationMovie = ({ count, pageNumber, onChangePage }: Props) => {
  return (
    <Stack my={7}>
      <Pagination
        count={count}
        onChange={onChangePage}
        page={pageNumber}
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

export default PaginationMovie;
