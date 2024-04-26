import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  NativeSelect,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setSortBy } from '../feather/movies/movieSlice';

const SortSelector = () => {
  const sortBy = useAppSelector((state) => state.movie.sortBy);
  const dispatch = useAppDispatch();

  const sortOrder = [
    { value: 'popularity.desc', label: 'Popularity Descending' },
    { value: 'popularity.asc', label: 'Popularity Ascending' },
    { value: 'vote_average.desc', label: 'Rating Descending' },
    { value: 'vote_average.asc', label: 'Rating Ascending' },
    { value: 'primary_release_date.desc', label: 'Release Date Descending' },
    { value: 'primary_release_date.asc', label: 'Release Date Ascending' },
    { value: 'title.asc', label: 'Title (A-Z)' },
    { value: 'title.desc', label: 'Title (Z-A)' },
  ];

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Sort
      </AccordionSummary>
      <AccordionDetails>
        <FormControl fullWidth>
          <NativeSelect
            value={sortBy}
            onChange={(e) => dispatch(setSortBy(e.target.value))}
            inputProps={{
              name: 'Sort',
              id: 'uncontrolled-native',
            }}
          >
            {sortOrder.map((order) => (
              <option key={order.value} value={order.value}>
                {order.label}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default SortSelector;
